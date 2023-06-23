import { useContext, useEffect } from 'react'
import {
  ConfirmOrderButton,
  GoToHomeButton,
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
import { useNavigate } from 'react-router-dom'
import { Box, Flex } from '~/components/Base'
import NumberInput from '~/components/NumberInput'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'

export function SelectedCoffees() {
  const { itemsCart, coffees, addItem, decrementItem, removeItem, totalCart } =
    useContext(ShoppingCartContext)

  const navigate = useNavigate()

  const { register, setValue } = useFormContext()

  const idsItemsCart = itemsCart.map((item) => item.id)

  useEffect(() => {
    register('items', { value: itemsCart })
  }, [register])

  useEffect(() => {
    setValue('items', itemsCart)
  }, [itemsCart, setValue])

  return (
    <SelectedCoffeesElement>
      <input type="hidden" {...register('items')} />
      {coffees
        .filter((coffee) => idsItemsCart.includes(coffee.id))
        .map((coffee) => (
          <ItemCoffee key={coffee.id}>
            <ItemCoffeeImage src={coffee.image_path} />
            <Box style={{ width: '100%' }}>
              <ItemCoffeeHeader>
                <ItemCoffeeName>{coffee.coffee_name}</ItemCoffeeName>
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

      {itemsCart.length > 0 && (
        <>
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
          <ConfirmOrderButton type="submit">
            Confirmar pedido
          </ConfirmOrderButton>
        </>
      )}

      {itemsCart.length === 0 && (
        <Flex
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          <Box style={{ textAlign: 'center' }}>Nenhum café adicionado</Box>
          <GoToHomeButton
            onClick={() => {
              navigate('/')
            }}
          >
            Voltar para home
          </GoToHomeButton>
        </Flex>
      )}
    </SelectedCoffeesElement>
  )
}
