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
`

export const ButtonDiv = styled.div`
  display: flex;
  & > button:first-child {
    margin-right: 10px;
  }
`

export const LocationButton = styled(Button)`
  color: ${({ theme }) => theme.colors.purple[0]};
  background-color: ${({ theme }) => theme.colors.purple[2]};

  & > svg {
    color: ${({ theme }) => theme.colors.purple[1]};
  }
`

export const ShoppingCartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.yellow[2]};

  & > svg {
    color: ${({ theme }) => theme.colors.yellow[0]};
  }
`
