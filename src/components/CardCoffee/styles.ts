import styled from 'styled-components'
import { Button } from '../Base'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[6]};
  border-radius: 5px 40px;
  margin-top: 20px;
  padding: 15px;
`

export const CoffeeImage = styled.img`
  margin-top: -35px;
  width: 100px;
`

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CoffeeTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray[1]};
`
export const CoffeeDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[3]};
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2rem;
`

export const CoffeeAddition = styled.div`
  font-weight: bold;
  font-size: 0.75rem;
  padding-inline: 10px;
  border-radius: 99px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.yellow[0]};
  background-color: ${({ theme }) => theme.colors.yellow[2]};
`

export const CoffeePrice = styled.div`
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[2]};
`

export const ShoppingCartPurpleButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple[0]};

  & > svg {
    color: ${({ theme }) => theme.colors.purple[2]};
  }
`
