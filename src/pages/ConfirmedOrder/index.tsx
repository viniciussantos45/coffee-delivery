import { CurrencyDollar, MapPin, Timer, Warning } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Alert } from '~/components/Alert'
import {
  Box,
  Flex,
  RoundedIconDarkYellow,
  RoundedIconPurple,
  RoundedIconYellow,
} from '~/components/Base'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'
import {
  Container,
  GradientBorderBox,
  Illustration,
  Item,
  ItemText,
  ItemTextBold,
  Subtitle,
  Title,
} from './styles'

const paymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function ConfirmedOrder() {
  const [showAlert, setShowAlert] = useState(false)

  const { state: params } = useLocation()

  const navigate = useNavigate()

  const { clearCart } = useContext(ShoppingCartContext)

  useEffect(() => {
    if (!params) {
      navigate('/')
    } else {
      clearCart()
      setShowAlert(true)
    }
  }, [params, navigate])

  if (!params) return <></>

  return (
    <Container>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

      <Flex style={{ gap: '60px' }}>
        <GradientBorderBox>
          <Item>
            <RoundedIconPurple>
              <MapPin size={15} weight="fill" color="#fff" />
            </RoundedIconPurple>
            <Box>
              <ItemText>
                Entrega em{' '}
                <ItemTextBold>{`${params.address.street}, ${params.address.number}`}</ItemTextBold>
              </ItemText>
              <ItemText>{`${params.address.neighborhood} - ${params.address.city}, ${params.address.state}`}</ItemText>
            </Box>
          </Item>
          <Item style={{ margin: '35px 0' }}>
            <RoundedIconYellow>
              <Timer size={15} weight="fill" color="#fff" />
            </RoundedIconYellow>
            <Box>
              <ItemText>Previsão de entrega</ItemText>
              <ItemText>
                <ItemTextBold>20 min - 30 min</ItemTextBold>
              </ItemText>
            </Box>
          </Item>
          <Item>
            <RoundedIconDarkYellow>
              <CurrencyDollar size={15} weight="fill" color="#fff" />
            </RoundedIconDarkYellow>
            <Box>
              <ItemText>Pagamento na entrega</ItemText>
              <ItemText>
                <ItemTextBold>
                  {
                    paymentMethods[
                      params.payment
                        .paymentMethod as keyof typeof paymentMethods
                    ]
                  }
                </ItemTextBold>
              </ItemText>
            </Box>
          </Item>
        </GradientBorderBox>
        <Illustration src="./Illustration.svg" />
      </Flex>
      {showAlert && (
        <Alert
          title="Atenção!"
          message="Esta é uma compra fictícia, portanto, não será enviado nenhum produto."
          variant="warning"
          icon={
            <Warning size={24} weight="fill" style={{ marginRight: '5px' }} />
          }
          onClose={() => {
            setShowAlert(false)
          }}
        />
      )}
    </Container>
  )
}
