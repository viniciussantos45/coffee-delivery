import { useFormContext } from 'react-hook-form'
import { Box, Flex, Input } from '~/components/Base'

export function AddressForm() {
  const { register } = useFormContext()
  return (
    <Box>
      <Box style={{ width: '30%', marginBottom: '15px' }}>
        <Input placeholder="CEP" {...register('address.cep')} />
      </Box>
      <Box style={{ marginBottom: '15px' }}>
        <Input placeholder="Rua" {...register('address.street')} />
      </Box>
      <Flex style={{ marginBottom: '15px', gap: '15px' }}>
        <Input
          {...register('address.number')}
          placeholder="Número"
          style={{ width: '43%' }}
        />
        <Input placeholder="Complemento" {...register('address.complement')} />
      </Flex>
      <Flex style={{ marginBottom: '15px', gap: '15px' }}>
        <Input
          {...register('address.neighborhood')}
          placeholder="Bairro"
          style={{ width: '51.5%' }}
        />
        <Input placeholder="Cidade" {...register('address.city')} />
        <Input
          {...register('address.state')}
          placeholder="UF"
          style={{ width: '15%' }}
        />
      </Flex>
    </Box>
  )
}
