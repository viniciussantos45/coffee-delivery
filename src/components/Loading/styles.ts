import styled, { keyframes } from 'styled-components'

// Define the keyframes for the spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(720deg); }
`

// Define the styled component for the spinner
export const Spin = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.purple[2]}; /* Light grey */
  border-top: 8px solid ${({ theme }) => theme.colors.purple[1]};
  border-radius: 50%; /* To make it circular */
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;

  ::before {
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.purple[1]};
  }
  ::after {
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.purple[1]};
  }
`
