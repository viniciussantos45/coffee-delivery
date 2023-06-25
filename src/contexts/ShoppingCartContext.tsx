import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useMemo, useState } from 'react'
import api from '~/services/api'
import { ResultCoffees } from '~/types/AxiosResponses'
import {
  CoffeeProps,
  ItemCart,
  ShoppingCartContextType,
  ShoppingCartProviderProps,
} from '~/types/ShoppingCart'

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [itemsCart, setItemsCart] = useState<ItemCart[]>(() => {
    const { 'coffee-delivery.itemsCart': cookieItemsCart } = parseCookies()

    return cookieItemsCart ? JSON.parse(cookieItemsCart) : []
  })

  useEffect(() => {
    const tenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000)
    setCookie(null, 'coffee-delivery.itemsCart', JSON.stringify(itemsCart), {
      path: '/',
      expires: tenMinutes,
    })
  }, [itemsCart])

  useEffect(() => {
    async function loadCoffees() {
      const { data } = await api.get<ResultCoffees>('/')

      setCoffees(data.coffees)
    }

    loadCoffees()
  }, [])

  const quantityItemsInCart = useMemo(() => {
    return itemsCart.reduce((acc, item) => acc + item.quantity, 0)
  }, [itemsCart])

  const totalCart = useMemo(() => {
    return itemsCart.reduce((total, item) => {
      const itemDetails = coffees.find((coffee) => coffee.id === item.coffee_id)
      if (!itemDetails) return total
      return total + itemDetails.price * item.quantity
    }, 0)
  }, [itemsCart, coffees])

  function addItem(id: string, quantity: number) {
    if (quantity <= 0) return

    if (itemsCart.some((item) => item.coffee_id === id)) {
      const newItemsCart = itemsCart.map((item) => {
        if (item.coffee_id === id) {
          return { ...item, quantity: item.quantity + quantity }
        }

        return item
      })

      return setItemsCart(newItemsCart)
    }

    setItemsCart([...itemsCart, { coffee_id: id, quantity }])
  }

  function decrementItem(id: string) {
    const existingItem = itemsCart.find((item) => item.coffee_id === id)

    if (!existingItem || existingItem.quantity <= 0) return

    if (existingItem.quantity === 1) {
      setItemsCart(itemsCart.filter((item) => item.coffee_id !== id))
    } else {
      const updatedItems = itemsCart.map((item) => {
        if (item.coffee_id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })

      setItemsCart(updatedItems)
    }
  }

  function removeItem(id: string) {
    const existingItem = itemsCart.find((item) => item.coffee_id === id)

    if (!existingItem) return

    setItemsCart(itemsCart.filter((item) => item.coffee_id !== id))
  }

  function clearCart() {
    setItemsCart([])
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
        clearCart,
        totalCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
