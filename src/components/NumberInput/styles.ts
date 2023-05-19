import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 25px;
  margin: 0;
  border: none;
  text-align: center;
  font-size: 1.1rem;
  background: none;
  color: #333;
  outline: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  padding: 10px;
  border-radius: 5px;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  height: 18px;
  color: ${({ theme }) => theme.colors.purple[0]};
  cursor: pointer;
`
