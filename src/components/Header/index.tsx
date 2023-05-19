import { useNavigate } from 'react-router-dom'
import {
  ButtonDiv,
  HeaderWrapper,
  LocationButton,
  Logo,
  ShoppingCartButton,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  const navigate = useNavigate()

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
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCartButton>
      </ButtonDiv>
    </HeaderWrapper>
  )
}
