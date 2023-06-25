import styled from 'styled-components'
import { Button } from '../Base'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 30px;
  padding-inline: 6rem;
`

export const Logo = styled.img`
  width: 85px;
  color: #333;

  cursor: pointer;
`

export const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`

export const LocationButton = styled(Button)`
  color: ${({ theme }) => theme.colors.purple[0]};
  background-color: ${({ theme }) => theme.colors.purple[2]};

  & > svg {
    color: ${({ theme }) => theme.colors.purple[1]};
  }
`

export const ShoppingCartButton = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.yellow[2]};

  & > svg {
    color: ${({ theme }) => theme.colors.yellow[0]};
  }
`

export const MyOrdersButton = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.purple[2]};

  & > svg {
    color: ${({ theme }) => theme.colors.purple[0]};
  }
`

export const SignOutButton = styled(Button)`
  position: relative;
  background-color: #ffe0e0;

  & > svg {
    color: #fe4343;
  }
`

export const ShoppingCartQuantity = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;

  width: 22px;
  height: 22px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.yellow[0]};
`

export const ShoppingCartQuantityText = styled.span`
  height: 10px;
  display: flex;
  align-items: center;
`
