import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useLocation, useNavigate } from 'react-router-dom'
import { ModalSignUp } from '~/components/ModalSignUp'
import {
  AuthContextData,
  AuthProviderProps,
  LoginCredentials,
  User,
} from '~/types/Auth'
import api from '../services/api'

const openRoutes = ['/']

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState<User | null>(null)

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
      const { data } = await api.post(
        '/session',
        {
          email,
          password,
        },
        {
          headers: {
            'X-ORIGIN': 'https://coffee-delivery-api-dqr2.onrender.com',
          },
        },
      )

      const { access_token: accessToken } = data

      const timeCookie = 60 * 15

      setCookie(undefined, 'coffee-delivery.token', accessToken, {
        maxAge: timeCookie,
        path: '/',
      })

      setUser({ email })

      api.defaults.headers.common.Authorization = `bearer ${accessToken}`
    } catch (e) {
      return e
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {!user && !openRoutes.includes(location.pathname) && <ModalSignUp />}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
