import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useLocation, useNavigate } from 'react-router-dom'
import { Alert } from '~/components/Alert'
import { ModalSignUp } from '~/components/ModalSignUp'
import {
  AuthContextData,
  AuthProviderProps,
  LoginCredentials,
  SignUpCredentials,
  User,
} from '~/types/Auth'
import api from '../services/api'

import { WarningCircle } from 'phosphor-react'

const openRoutes = ['/']

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState<User | null>(null)
  const [alertError, setAlertError] = useState(false)

  const signOut = useCallback(() => {
    destroyCookie(null, 'coffee-delivery.token', { path: '/' })

    setUser(undefined)
    navigate('/login')
  }, [navigate])

  useEffect(() => {
    async function onLoadContext() {
      const { 'coffee-delivery.token': token } = parseCookies()

      if (token) {
        api.defaults.headers.common.Authorization = `bearer ${token}`

        api
          .get('/orders/my_orders')
          .then(({ data }) => data)
          .catch(() => {
            signOut()
          })
      }
    }

    onLoadContext()
  }, [location.pathname, signOut, navigate])

  async function signIn({ email, password }: LoginCredentials) {
    try {
      const { data } = await api.post('/session', {
        email,
        password,
      })

      const { access_token: accessToken } = data

      const timeCookie = 60 * 15

      setCookie(undefined, 'coffee-delivery.token', accessToken, {
        maxAge: timeCookie,
        path: '/',
      })

      setUser({ email })

      api.defaults.headers.common.Authorization = `bearer ${accessToken}`
    } catch (e) {
      setAlertError(true)
      return e
    }
  }

  async function signUp({ email, name, password }: SignUpCredentials) {
    try {
      await api.post('/users/create', {
        email,
        name,
        password,
      })

      signIn({ email, password })
    } catch (e) {
      setAlertError(true)
      return e
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        user,
      }}
    >
      {!user && !openRoutes.includes(location.pathname) && <ModalSignUp />}
      {alertError && (
        <Alert
          message="Erro ao fazer login, senha incorreta."
          title="Erro"
          variant="error"
          icon={
            <WarningCircle
              size={20}
              weight="fill"
              style={{ marginRight: '5px' }}
            />
          }
          onClose={() => {
            setAlertError(false)
          }}
        />
      )}

      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
