import { Minus, Plus } from 'phosphor-react'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Container, IconButton, StyledInput } from './styles'

export type NumberInputRefType = {
  getValue: () => number
  increment: (e: React.MouseEventHandler<HTMLButtonElement>) => void
  decrement: (e: React.MouseEventHandler<HTMLButtonElement>) => void
}

interface NumberInputProps {
  size?: 'small' | 'medium'
  defaultValue?: number

  onDecrement?: () => void
  onIncrement?: () => void
}

const NumberInput = forwardRef(
  (
    {
      size = 'medium',
      defaultValue = 0,
      onDecrement = () => {},
      onIncrement = () => {},
    }: NumberInputProps,
    ref: React.Ref<NumberInputRefType> | undefined,
  ) => {
    const [value, setValue] = useState(defaultValue)

    const increment = (e: any) => {
      e.preventDefault()
      setValue((prevValue) => prevValue + 1)
      onIncrement()
    }

    const decrement = (e: any) => {
      e.preventDefault()
      if (value > 0) {
        setValue((prevValue) => prevValue - 1)
        onDecrement()
      }
    }

    useImperativeHandle(ref, () => ({
      getValue: () => value,
      increment,
      decrement,
    }))

    return (
      <Container sizeComponent={size}>
        <IconButton onClick={decrement} sizeComponent={size}>
          <Minus size={size === 'small' ? 13 : 15} weight="bold" />
        </IconButton>
        <StyledInput type="text" value={value} readOnly sizeComponent={size} />
        <IconButton onClick={increment} sizeComponent={size}>
          <Plus size={size === 'small' ? 13 : 15} weight="bold" />
        </IconButton>
      </Container>
    )
  },
)

NumberInput.displayName = 'NumberInput'

export default NumberInput
