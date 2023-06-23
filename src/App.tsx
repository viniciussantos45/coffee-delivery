import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Router />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App
