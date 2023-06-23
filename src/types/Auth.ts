import { ReactNode } from 'react'

export type LoginCredentials = {
  email: string
  password: string
}

export type AuthProviderProps = {
  children: ReactNode
}

export type User =
  | null
  | undefined
  | {
      email: string
    }

export type AuthContextData = {
  signIn(credentials: LoginCredentials): Promise<any>
  signOut(): void
  user: User
}
