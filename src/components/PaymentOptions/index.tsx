import { CreditCard, Money } from 'phosphor-react'
import { Grid } from '../Base'
import { Label, PaymentOption, RadioButtonContent } from './styles'

export function PaymentOptions() {
  const options = [
    { value: 'credit', Icon: CreditCard, label: 'Cartão de Crédito' },
    { value: 'debit', Icon: CreditCard, label: 'Cartão de Débito' },
    { value: 'cash', Icon: Money, label: 'Dinheiro' },
  ]

  return (
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
            name="payment"
            value={option.value}
          />
          <RadioButtonContent>
            <option.Icon size={24} color="#9370db" />
            <Label>{option.label}</Label>
          </RadioButtonContent>
        </PaymentOption>
      ))}
    </Grid>
  )
}

export default PaymentOptions
