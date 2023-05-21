import { ErrorText } from '../Base'

interface ErrorMessageProps {
  message?: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <ErrorText>{message}</ErrorText>
}
