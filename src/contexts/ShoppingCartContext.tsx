import { createContext, useMemo, useState } from 'react'
import {
  CoffeeProps,
  ItemCart,
  ShoppingCartContextType,
  ShoppingCartProviderProps,
} from '~/types/ShoppingCart'

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [coffees] = useState<CoffeeProps[]>([
    {
      id: '1',
      additions: ['TRADICIONAL'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos ',
      price: 9.9,
      image: '/public/coffee-expresso.png',
    },
    {
      id: '2',
      additions: ['TRADICIONAL'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image: '/public/coffee-american.png',
    },
    {
      id: '3',
      additions: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      image: '/public/coffee-expresso-cremoso.png',
    },
    {
      id: '4',
      additions: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: '/public/coffee-gelado.png',
    },
    {
      id: '5',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: '/public/coffee-milk.png',
    },
    {
      id: '6',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: '/public/coffee-late.png',
    },
    {
      id: '7',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image: '/public/coffee-capuccino.png',
    },
    {
      id: '8',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: '/public/coffee-machiato.png',
    },
    {
      id: '9',
      additions: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: '/public/coffee-mocaccino.png',
    },
    {
      id: '10',
      additions: ['ESPECIAL', 'COM LEITE'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: '/public/coffee-chocolate-quente.png',
    },
    {
      id: '11',
      additions: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image: '/public/coffee-cuban.png',
    },
    {
      id: '12',
      additions: ['ESPECIAL'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: '/public/coffee-havaiano.png',
    },
    {
      id: '13',
      additions: ['ESPECIAL'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: '/public/coffee-arabe.png',
    },
    {
      id: '14',
      additions: ['ESPECIAL', 'ALCOÓLICO'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: '/public/coffee-irlandes.png',
    },
  ])

  const [itemsCart, setItemsCart] = useState<ItemCart[]>([])

  const quantityItemsInCart = useMemo(() => {
    return itemsCart.reduce((acc, item) => acc + item.quantity, 0)
  }, [itemsCart])

  const totalCart = useMemo(() => {
    return itemsCart.reduce((total, item) => {
      const itemDetails = coffees.find((coffee) => coffee.id === item.id)
      if (!itemDetails) return total
      return total + itemDetails.price * item.quantity
    }, 0)
  }, [itemsCart, coffees])

  function addItem(id: string, quantity: number) {
    if (quantity <= 0) return

    if (itemsCart.some((item) => item.id === id)) {
      const newItemsCart = itemsCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity }
        }

        return item
      })

      return setItemsCart(newItemsCart)
    }

    setItemsCart([...itemsCart, { id, quantity }])
  }

  function decrementItem(id: string) {
    const existingItem = itemsCart.find((item) => item.id === id)

    if (!existingItem || existingItem.quantity <= 0) return

    if (existingItem.quantity === 1) {
      setItemsCart(itemsCart.filter((item) => item.id !== id))
    } else {
      const updatedItems = itemsCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })

      setItemsCart(updatedItems)
    }
  }

  function removeItem(id: string) {
    const existingItem = itemsCart.find((item) => item.id === id)

    if (!existingItem) return

    setItemsCart(itemsCart.filter((item) => item.id !== id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        coffees,
        itemsCart,
        addItem,
        decrementItem,
        removeItem,
        quantityItemsInCart,
        totalCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
