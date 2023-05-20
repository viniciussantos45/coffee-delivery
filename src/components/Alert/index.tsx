import { Warning } from 'phosphor-react'
import { Button, Message, Modal, Overlay, Title } from './styles'

type AlertProps = {
  title: string
  message: string
  onClose: () => void
}

export const Alert = ({ title, message, onClose }: AlertProps) => (
  <Overlay>
    <Modal>
      <Title>
        <Warning size={24} style={{ marginRight: '5px' }} /> {title}
      </Title>
      <Message>{message}</Message>
      <Button onClick={onClose}>OK</Button>
    </Modal>
  </Overlay>
)
