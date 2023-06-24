import styled, { keyframes } from 'styled-components'
import { Input as InputBase } from '~/components/Base'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const swing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const Overlay = styled.div`
  z-index: 999;
  background: rgba(255, 255, 255, 0.5);

  backdrop-filter: blur(5px);
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 0.5s ease;
`

export const Modal = styled.div`
  /* width: 400px; */
  padding: 35px;
  background: ${({ theme }) => theme.colors.purple[1]}55;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease;
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.purple[1]};
`

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.purple[0]};
  margin-top: 20px;
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.purple[1]};
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
`

export const Input = styled(InputBase)`
  background-color: ${({ theme }) => theme.colors.purple[1]}33;
  border-color: ${({ theme }) => theme.colors.purple[1]};
  color: ${({ theme }) => theme.colors.purple[0]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[5]};
  }
`

export const ButtonAnotherAction = styled.button`
  margin-top: 5px;
  padding: 5px 10px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.purple[1]};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  align-self: flex-end; /* Aligns this item to the start of the flex container. */
  flex-grow: 0;
`

export const FormContainer = styled.div`
  // Estilo do container do formulário
`

export const ErrorMessage = styled.p`
  // Estilo para mensagens de erro
`
