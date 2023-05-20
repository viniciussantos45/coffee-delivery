import styled from 'styled-components'

export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > input[type='radio'] {
    display: none;

    &:checked + div {
      background-color: ${({ theme }) => theme.colors.purple[2]};
      border-color: ${({ theme }) => theme.colors.purple[1]};
    }
  }
`

export const RadioButtonContent = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[5]};
  border: 1px solid transparent;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[4]};
  }
`

export const Label = styled.span`
  margin-left: 10px;
  font-size: 0.75rem;
  color: #808080;
  text-transform: uppercase;
`
