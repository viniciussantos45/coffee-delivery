import { zodResolver } from '@hookform/resolvers/zod'
import { User, UserCirclePlus } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { z } from 'zod'
import { useAuth } from '~/contexts/AuthContext'
import { Flex } from '../Base'
import {
  Button,
  ButtonAnotherAction,
  ErrorMessage,
  FormContainer,
  Input,
  Modal,
  Overlay,
  Title,
} from './styles'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  name: z.string().nonempty({ message: 'Name is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
})

const schemaLogin = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().nonempty({ message: 'Password is required' }),
})

export type FormType = z.infer<typeof schema>
export type FormTypeLogin = z.infer<typeof schemaLogin>

export function ModalSignUp() {
  const theme = useTheme()
  const [isSignUp, setIsSignUp] = useState(false)

  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypeLogin>({
    resolver: zodResolver(schemaLogin),
  })

  const onSubmit = (data: FormTypeLogin) => {
    signIn(data)
  }

  return (
    <Overlay>
      <Modal>
        {isSignUp && (
          <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
            <UserCirclePlus
              size={80}
              color={theme.colors.purple[1]}
              weight="fill"
            />
            <Title>Cadastre-se</Title>
            <FormContainer style={{ width: '20vw' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex style={{ flexDirection: 'column', gap: 10 }}>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}

                  <Input type="text" placeholder="Nome" {...register('name')} />
                  {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  )}
                  <Input
                    type="password"
                    placeholder="Senha"
                    {...register('password')}
                  />
                  {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  )}
                  <ButtonAnotherAction
                    onClick={() => {
                      setIsSignUp(false)
                    }}
                  >
                    Faça login
                  </ButtonAnotherAction>
                  <Button onClick={() => {}}>Criar conta</Button>
                </Flex>

                {/* <Input type="submit" value="Submit" /> */}
              </form>
            </FormContainer>
          </Flex>
        )}
        {!isSignUp && (
          <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
            <User size={80} color={theme.colors.purple[1]} weight="fill" />
            <Title>Login</Title>
            <FormContainer style={{ width: '20vw' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex style={{ flexDirection: 'column', gap: 10 }}>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}

                  <Input
                    type="password"
                    placeholder="Senha"
                    {...register('password')}
                  />
                  {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  )}
                  <ButtonAnotherAction
                    onClick={() => {
                      setIsSignUp(true)
                    }}
                  >
                    Cadastre-se
                  </ButtonAnotherAction>
                  <Button type="submit">Fazer login</Button>
                </Flex>

                {/* <Input type="submit" value="Submit" /> */}
              </form>
            </FormContainer>
          </Flex>
        )}
      </Modal>
    </Overlay>
  )
}
