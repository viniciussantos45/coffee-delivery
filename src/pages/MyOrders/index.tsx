import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Coffee } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Box, Flex } from '~/components/Base'
import { Loading } from '~/components/Loading'
import { useAuth } from '~/contexts/AuthContext'
import api from '~/services/api'
import { ResultOrders } from '~/types/AxiosResponses'
import { Order } from '~/types/Order'
import { GoToHomeButton } from '../ShoppingCart/Forms/SelectedCoffees/styles'
import {
  Container,
  Content,
  DeliveryTag,
  ImgEmptyOrders,
  Item,
  ItemText,
  ItemTitle,
  Label,
  TextEmptyOrders,
  Title,
} from './styles'

export function MyOrders() {
  const theme = useTheme()

  const { user } = useAuth()
  const navigate = useNavigate()

  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadOrders() {
      setIsLoading(true)
      const { data } = await api.get<ResultOrders>('/orders/my_orders')

      setOrders(data.orders)
      setIsLoading(false)
    }

    if (user) {
      loadOrders()
    }
  }, [user])

  return (
    <Container>
      <Title>Meus Pedidos</Title>

      <Content>
        {orders.map((order, index) => (
          <Item key={index}>
            <Coffee size={40} color={theme.colors.yellow[1]} weight="fill" />
            <Flex
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box style={{ marginLeft: '20px' }}>
                <ItemTitle>
                  Realizado em{' '}
                  {format(
                    new Date(parseISO(order.created_at + 'Z')),
                    "d MMMM yyyy 'às' H':'mm",
                    { locale: ptBR },
                  )}
                </ItemTitle>
                <ItemText>
                  <b>Endereço: </b>
                  {order.street}, {order.number}, {order.neighborhood},
                  {order.city} - {order.state}
                </ItemText>
                <ItemText>
                  <b>Total: </b>
                  {order.total_price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </ItemText>
              </Box>

              <DeliveryTag>
                <img src="./motorcycle-fill.svg" />
                <Label>Entregue</Label>
              </DeliveryTag>
            </Flex>
          </Item>
        ))}
      </Content>
      {orders.length === 0 && !isLoading && (
        <Flex
          style={{
            marginTop: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
            <TextEmptyOrders>
              Você ainda não realizou nenhum pedido.
            </TextEmptyOrders>
            <TextEmptyOrders>
              Volte para a tela inicial e escolha um café! :)
            </TextEmptyOrders>
            <Flex style={{ width: '50%', marginTop: '30px' }}>
              <GoToHomeButton
                onClick={() => {
                  navigate('/')
                }}
              >
                Voltar para Home
              </GoToHomeButton>
            </Flex>
          </Flex>
          <ImgEmptyOrders src="./undraw_empty_orders.svg" />
        </Flex>
      )}

      {isLoading && <Loading />}
    </Container>
  )
}
