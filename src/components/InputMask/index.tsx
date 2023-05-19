import React from 'react'
import { Input as BaseInput } from '~/components/Base'
import { InputProps } from '~/types/Forms'
import { applyMask } from '~/utils/ApplyMask'

export function InputMask({ mask }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = applyMask(e.target.value, mask)
    // setter(name, newValue)
  }

  return <BaseInput onChange={handleChange} />
}
