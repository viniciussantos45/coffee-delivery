import styled, { keyframes } from 'styled-components'

type VariantProps = {
  variant: 'success' | 'error' | 'warning'
}

const colorsVariant = {
  background: {
    success: '#48BB7866',
    error: '#F56565',
    warning: '#ECC94B',
  },

  color: {
    success: '#2F855A',
    error: '#fff',
    warning: '#fff',
  },
}

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

export const Modal = styled.div<VariantProps>`
  width: 300px;
  padding: 30px 20px;
  background: ${({ variant }) => colorsVariant.background[variant]};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease;
`

export const Title = styled.h3<VariantProps>`
  display: flex;
  align-items: center;
  color: ${({ variant }) => colorsVariant.color[variant]};
`

// export const Icon = styled(XCircle)`
//   margin-right: 10px;
//   animation: ${swing} 1s ease infinite;
// `

export const Message = styled.p<VariantProps>`
  color: ${({ variant }) => colorsVariant.color[variant]};
  margin-top: 20px;
`

export const Button = styled.button<VariantProps>`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  outline: none;
  background: ${({ variant }) => colorsVariant.color[variant]};
  color: #fff;
  border-radius: 999px;
  cursor: pointer;
`
