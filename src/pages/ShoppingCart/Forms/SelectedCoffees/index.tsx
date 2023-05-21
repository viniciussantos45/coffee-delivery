import { useContext, useEffect } from 'react'
import {
  ConfirmOrderButton,
  ItemCoffee,
  ItemCoffeeAction,
  ItemCoffeeHeader,
  ItemCoffeeImage,
  ItemCoffeeName,
  ItemCoffeeNameAndAction,
  ItemCoffeePrice,
  ItemCoffeeRemoveButton,
  ItemCoffeeRemoveText,
  ResumeOrder,
  ResumeOrderDetail,
  ResumeOrderTotal,
  SelectedCoffees as SelectedCoffeesElement,
} from './styles'

import { Trash } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Box } from '~/components/Base'
import NumberInput from '~/components/NumberInput'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'

export function SelectedCoffees() {
  const { itemsCart, coffees, addItem, decrementItem, removeItem, totalCart } =
    useContext(ShoppingCartContext)

  const { register, setValue } = useFormContext()

  const idsItemsCart = itemsCart.map((item) => item.id)

  useEffect(() => {
    register('items', { value: itemsCart })
  }, [register])

  useEffect(() => {
    setValue('items', itemsCart)
    // if (itemsSchema.safeParse(itemsCart).success) {
    // setValue('items', itemsCart);
    // } else {
    //   // Trate o erro de validação aqui
    // }
  }, [itemsCart, setValue])

  return (
    <SelectedCoffeesElement>
      <input type="hidden" {...register('items')} />
      {coffees
        .filter((coffee) => idsItemsCart.includes(coffee.id))
        .map((coffee) => (
          <ItemCoffee key={coffee.id}>
            <ItemCoffeeImage src={coffee.image} />
            <Box style={{ width: '100%' }}>
              <ItemCoffeeHeader>
                <ItemCoffeeName>{coffee.name}</ItemCoffeeName>
                <ItemCoffeePrice>
                  {coffee.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </ItemCoffeePrice>
              </ItemCoffeeHeader>
              <ItemCoffeeNameAndAction>
                <ItemCoffeeAction>
                  <NumberInput
                    size="small"
                    defaultValue={
                      itemsCart.find((ic) => ic.id === coffee.id)?.quantity
                    }
                    onDecrement={() => {
                      decrementItem(coffee.id)
                    }}
                    onIncrement={() => {
                      addItem(coffee.id, 1)
                    }}
                  />
                  <ItemCoffeeRemoveButton>
                    <Trash size={18} />
                    <ItemCoffeeRemoveText
                      onClick={() => {
                        removeItem(coffee.id)
                      }}
                    >
                      REMOVER
                    </ItemCoffeeRemoveText>
                  </ItemCoffeeRemoveButton>
                </ItemCoffeeAction>
              </ItemCoffeeNameAndAction>
            </Box>
          </ItemCoffee>
        ))}

      <ResumeOrder>
        <ResumeOrderDetail>
          <Box>Total de itens</Box>
          <Box>
            {totalCart.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Box>
        </ResumeOrderDetail>
        <ResumeOrderDetail>
          <Box>Entrega</Box>
          <Box>
            {(3.5).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Box>
        </ResumeOrderDetail>
        <ResumeOrderTotal>
          <Box>Total</Box>
          <Box>
            {(totalCart + 3.5).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Box>
        </ResumeOrderTotal>
      </ResumeOrder>
      <ConfirmOrderButton type="submit">Confirmar pedido</ConfirmOrderButton>
    </SelectedCoffeesElement>
  )
}
