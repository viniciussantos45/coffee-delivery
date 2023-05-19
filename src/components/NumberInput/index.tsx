import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { Container, IconButton, StyledInput } from './styles'

const NumberInput = () => {
  const [value, setValue] = useState(0)

  const increment = () => {
    setValue((prevValue) => prevValue + 1)
  }

  const decrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1)
    }
  }

  return (
    <Container>
      <IconButton onClick={decrement}>
        <Minus size={15} />
      </IconButton>
      <StyledInput type="text" value={value} readOnly />
      <IconButton onClick={increment}>
        <Plus size={15} />
      </IconButton>
    </Container>
  )
}

export default NumberInput
