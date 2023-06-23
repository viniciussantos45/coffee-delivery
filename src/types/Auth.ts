import { ReactNode } from 'react'

export type LoginCredentials = {
  email: string
  password: string
}

export type SignUpCredentials = {
  email: string
  name: string
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
  signUp(credentials: SignUpCredentials): Promise<any>
  signOut(): void
  user: User
}
