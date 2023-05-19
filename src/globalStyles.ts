import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.gray[0]};
  }

  h1 {
    font-size: 48px;
    font-weight: 800;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  body, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 160%;
  }
  // Adicione quaisquer estilos globais adicionais, se necessário
`
