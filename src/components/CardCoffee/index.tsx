import { ShoppingCart } from 'phosphor-react'
import { useContext, useRef, useState } from 'react'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'
import { CardCoffeeProps } from '~/types/CardCoffee'
import { Alert } from '../Alert'
import { Flex } from '../Base'
import NumberInput, { NumberInputRefType } from '../NumberInput'
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
  id,
  name,
  description,
  additions,
  image,
  price,
}: CardCoffeeProps) => {
  const { addItem } = useContext(ShoppingCartContext)

  const numberInputRef = useRef<NumberInputRefType>(null)

  const [showAlert, setShowAlert] = useState(false)

  return (
    <CardContainer>
      {showAlert && (
        <Alert
          title="Atenção"
          message="Item adicionado ao seu carrinho!"
          onClose={() => {
            setShowAlert(false)
          }}
        />
      )}
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
          <NumberInput ref={numberInputRef} />
          <ShoppingCartPurpleButton
            onClick={() => {
              if (numberInputRef.current) {
                addItem(id, numberInputRef.current.getValue())
                setShowAlert(true)
              }
            }}
          >
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartPurpleButton>
        </Flex>
      </CardContent>
    </CardContainer>
  )
}
