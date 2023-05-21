import { CheckCircle } from 'phosphor-react'
import React from 'react'
import { Button, Message, Modal, Overlay, Title } from './styles'

type AlertProps = {
  title: string
  message: string
  onClose: () => void
  variant?: 'success' | 'warning' | 'error'
  icon?: React.ReactNode
}

export const Alert = ({
  title,
  message,
  onClose,
  icon = <CheckCircle size={24} style={{ marginRight: '5px' }} />,
  variant = 'success',
}: AlertProps) => (
  <Overlay>
    <Modal variant={variant}>
      <Title variant={variant}>
        {icon} {title}
      </Title>
      <Message variant={variant}>{message}</Message>
      <Button variant={variant} onClick={onClose}>
        OK
      </Button>
    </Modal>
  </Overlay>
)
