import { ShoppingCart } from 'phosphor-react'
import { CardCoffeeProps } from '~/types/CardCoffee'
import { Flex } from '../Base'
import NumberInput from '../NumberInput'
import {
  CardContainer,
  CardContent,
  CoffeeAddition,
  CoffeeDescription,
  CoffeeImage,
  CoffeePrice,
  CoffeeTitle,
  ShoppingCartPurpleButton,
} from './styles'

export const CardCoffee = ({
  name,
  description,
  additions,
  image,
  price,
}: CardCoffeeProps) => {
  return (
    <CardContainer>
      <CardContent>
        <CoffeeImage src={image} />
        <Flex style={{ gap: '5px' }}>
          {additions.map((addition, index) => (
            <CoffeeAddition key={index}>{addition}</CoffeeAddition>
          ))}
        </Flex>
        <CoffeeTitle>{name}</CoffeeTitle>
        <CoffeeDescription>{description}</CoffeeDescription>
        <Flex
          style={{
            width: '100%',
            marginTop: '20px',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <CoffeePrice>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </CoffeePrice>
          <NumberInput />
          <ShoppingCartPurpleButton>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartPurpleButton>
        </Flex>
      </CardContent>
    </CardContainer>
  )
}
