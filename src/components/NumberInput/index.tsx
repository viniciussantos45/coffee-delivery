import { Minus, Plus } from 'phosphor-react'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Container, IconButton, StyledInput } from './styles'

export type NumberInputRefType = {
  getValue: () => number
  increment: () => void
  decrement: () => void
}

const NumberInput = forwardRef(
  (props, ref: React.Ref<NumberInputRefType> | undefined) => {
    const [value, setValue] = useState(0)

    const increment = () => {
      setValue((prevValue) => prevValue + 1)
    }

    const decrement = () => {
      if (value > 0) {
        setValue((prevValue) => prevValue - 1)
      }
    }

    useImperativeHandle(ref, () => ({
      getValue: () => value,
      increment,
      decrement,
    }))

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
  },
)

NumberInput.displayName = 'NumberInput'

export default NumberInput
