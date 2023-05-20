import { useNavigate } from 'react-router-dom'
import {
  ButtonDiv,
  HeaderWrapper,
  LocationButton,
  Logo,
  ShoppingCartButton,
  ShoppingCartQuantity,
  ShoppingCartQuantityText,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'

export const Header = () => {
  const navigate = useNavigate()
  const { quantityItemsInCart } = useContext(ShoppingCartContext)

  return (
    <HeaderWrapper>
      <Logo
        src="/public/logo.png"
        onClick={() => {
          navigate('/')
        }}
      />
      <ButtonDiv>
        {/** TODO: get city and state */}
        <LocationButton>
          <MapPin weight="fill" size={24} style={{ marginRight: '5px' }} />{' '}
          {'São Caetano do Sul, SP'}
        </LocationButton>
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
      </ButtonDiv>
    </HeaderWrapper>
  )
}
