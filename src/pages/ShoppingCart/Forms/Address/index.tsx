import { useFormContext } from 'react-hook-form'
import { Box, Grid, Input } from '~/components/Base'
import { ErrorMessage } from '~/components/ErrorMessage'
import { InputMask } from '~/components/InputMask'
import { FormType } from '../..'
import { OptionalSpan } from './styles'

export function AddressForm() {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<FormType>()
  return (
    <Box>
      <Grid
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          marginBottom: '15px',
        }}
      >
        <Box style={{ gridColumn: 'span 2' }}>
          <InputMask
            name="address.cep"
            placeholder="CEP"
            mask="#####-###"
            register={register}
            setter={setValue}
            getter={getValues}
          />
          {errors.address?.cep && (
            <ErrorMessage message={errors.address.cep.message} />
          )}
        </Box>
      </Grid>
      <Box style={{ marginBottom: '15px' }}>
        <Input placeholder="Rua" {...register('address.street')} />
        {errors.address?.street && (
          <ErrorMessage message={errors.address.street.message} />
        )}
      </Box>
      <Grid
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          marginBottom: '15px',
          gap: '15px',
        }}
      >
        <Box style={{ gridColumn: 'span 2' }}>
          <Input {...register('address.number')} placeholder="Número" />
          {errors.address?.number && (
            <ErrorMessage message={errors.address.number.message} />
          )}
        </Box>
        <Box style={{ position: 'relative', gridColumn: 'span 4' }}>
          <OptionalSpan>Opcional</OptionalSpan>
          <Input
            placeholder="Complemento"
            {...register('address.complement')}
          />
          {errors.address?.complement && (
            <ErrorMessage message={errors.address.complement.message} />
          )}
        </Box>
      </Grid>
      <Grid
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          marginBottom: '15px',
          gap: '15px',
        }}
      >
        <Box style={{ gridColumn: 'span 2' }}>
          <Input {...register('address.neighborhood')} placeholder="Bairro" />
          {errors.address?.neighborhood && (
            <ErrorMessage message={errors.address.neighborhood.message} />
          )}
        </Box>
        <Box style={{ gridColumn: 'span 3' }}>
          <Input placeholder="Cidade" {...register('address.city')} />
          {errors.address?.city && (
            <ErrorMessage message={errors.address.city.message} />
          )}
        </Box>
        <Box style={{ gridColumn: 'span 1' }}>
          <Input {...register('address.state')} placeholder="UF" />
          {errors.address?.state && (
            <ErrorMessage message={errors.address.state.message} />
          )}
        </Box>
      </Grid>
    </Box>
  )
}
