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
import { Loading } from '~/components/Loading'
const openRoutes = ['/']

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState<User | null>(null)
  const [alertError, setAlertError] = useState(false)
  const [alertErrorSignUp, setAlertErrorSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showModalSignUp, setShowModalSignUp] = useState(false)

  const signOut = useCallback(() => {
    destroyCookie(null, 'coffee-delivery.token', { path: '/' })

    setUser(undefined)
  }, [navigate])

  async function onLoadContext() {
    setIsLoading(true)
    const { 'coffee-delivery.token': token } = parseCookies(undefined, {
      page: '/',
    })

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      api
        .get('/me')
        .then(({ data }) => {
          setUser(data.user.email)
        })
        .catch(() => {
          signOut()
        })
    } else {
      setShowModalSignUp(!openRoutes.includes(location.pathname))
    }
    setIsLoading(false)
  }

  useEffect(() => {
    onLoadContext()
  }, [location.pathname])

  useEffect(() => {
    if (user) {
      setShowModalSignUp(false)
    }
  }, [user])

  async function signIn({ email, password }: LoginCredentials) {
    setIsLoading(true)
    try {
      const { data } = await api.post('/session', {
        email,
        password,
      })

      const { access_token: accessToken } = data

      const timeCookie = 60 * 60 * 24 * 30 // 30 days

      setCookie(undefined, 'coffee-delivery.token', accessToken, {
        maxAge: timeCookie,
        path: '/',
      })

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`

      setUser({ email })
    } catch (e) {
      setIsLoading(false)
      setAlertError(true)
      return e
    }

    setIsLoading(false)
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
      setAlertErrorSignUp(true)
      return e
    }
  }

  if (isLoading) {
    return <Loading />
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
      {showModalSignUp && <ModalSignUp />}
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
      {alertErrorSignUp && (
        <Alert
          message="Erro ao criar usuário, tente novamente."
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
            setAlertErrorSignUp(false)
          }}
        />
      )}

      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
