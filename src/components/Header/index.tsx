import { useNavigate } from 'react-router-dom'
import {
  ButtonDiv,
  HeaderWrapper,
  LocationButton,
  Logo,
  MyOrdersButton,
  ShoppingCartButton,
  ShoppingCartQuantity,
  ShoppingCartQuantityText,
  SignOutButton,
} from './styles'

import { Handbag, MapPin, ShoppingCart, SignOut } from 'phosphor-react'
import { useContext } from 'react'
import { useAuth } from '~/contexts/AuthContext'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'
import { Flex } from '../Base'

export const Header = () => {
  const navigate = useNavigate()
  const { quantityItemsInCart } = useContext(ShoppingCartContext)

  const { user, signOut } = useAuth()

  return (
    <HeaderWrapper>
      <Flex style={{ gap: '30px' }}>
        <Logo
          src="./logo.png"
          onClick={() => {
            navigate('/')
          }}
        />
        <LocationButton>
          <MapPin weight="fill" size={24} style={{ marginRight: '5px' }} />{' '}
          {'Entrega para todo Brasil'}
        </LocationButton>
      </Flex>
      <ButtonDiv>
        <ShoppingCartButton
          onClick={() => {
            navigate('/shopping-cart')
          }}
        >
          {quantityItemsInCart > 0 && (
            <ShoppingCartQuantity>
              <ShoppingCartQuantityText>
                {quantityItemsInCart}
              </ShoppingCartQuantityText>
            </ShoppingCartQuantity>
          )}
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCartButton>
        <MyOrdersButton
          onClick={() => {
            navigate('/my-orders')
          }}
        >
          <Handbag size={24} weight="fill" />
        </MyOrdersButton>

        {user && (
          <SignOutButton
            onClick={() => {
              signOut()
            }}
          >
            <SignOut size={24} weight="fill" />
          </SignOutButton>
        )}
      </ButtonDiv>
    </HeaderWrapper>
  )
}
