import { Router } from './Router'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Router />
    </ShoppingCartProvider>
  )
}

export default App
