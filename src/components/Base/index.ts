import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
`
export const Box = styled.div``

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray[5]};
  color: ${({ theme }) => theme.colors.gray[2]};
  padding: 10px;
  font-size: 16px;
  background: none;
  background-color: #ededed;
  outline: none;
  border-radius: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[3]};
  }
`
export const ErrorText = styled.p`
  font-size: 0.8rem;
  color: #f56565;
`
