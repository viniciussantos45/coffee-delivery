import styled from 'styled-components'

export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  & > input[type='radio'] {
    display: none;

    &:checked + div {
      border: 1px solid;
      background-color: ${({ theme }) => theme.colors.purple[2]};
      border-color: ${({ theme }) => theme.colors.purple[1]};
    }
  }
`

export const RadioButtonContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`

export const Label = styled.span`
  margin-left: 10px;
  font-size: 0.75rem;
  color: #808080;
  text-transform: uppercase;
`
