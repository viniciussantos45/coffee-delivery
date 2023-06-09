import { CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Grid } from '~/components/Base'
import { ErrorMessage } from '~/components/ErrorMessage'
import { FormType } from '../..'
import { Label, PaymentOption, RadioButtonContent } from './styles'

export function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>()

  const options = [
    { value: 'credit', Icon: CreditCard, label: 'Cartão de Crédito' },
    { value: 'debit', Icon: CreditCard, label: 'Cartão de Débito' },
    { value: 'cash', Icon: Money, label: 'Dinheiro' },
  ]

  return (
    <>
      {errors.payment?.paymentMethod && (
        <ErrorMessage message={errors.payment.paymentMethod.message} />
      )}
      <Grid
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginTop: '20px',
        }}
      >
        {options.map((option) => (
          <PaymentOption key={option.value}>
            <input
              type="radio"
              id={option.value}
              value={option.value}
              {...register('payment.paymentMethod')}
            />
            <RadioButtonContent>
              <option.Icon size={24} color="#9370db" />
              <Label>{option.label}</Label>
            </RadioButtonContent>
          </PaymentOption>
        ))}
      </Grid>
    </>
  )
}
