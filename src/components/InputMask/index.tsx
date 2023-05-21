import React from 'react'
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'
import { Input as BaseInput } from '~/components/Base'
import { applyMask } from '~/utils/ApplyMask'

type InputMaskProps = {
  mask: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  getter: UseFormGetValues<any>
  setter: UseFormSetValue<any>
}

export function InputMask({
  name,
  mask,
  setter,
  placeholder,
  register,
}: InputMaskProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = applyMask(e.target.value, mask)
    setter(name, newValue)
  }

  return (
    <BaseInput
      {...register(name)}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
