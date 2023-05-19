import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyles } from './globalStyles'
import { defaultTheme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
