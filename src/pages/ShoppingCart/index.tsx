import { Box } from '~/components/Base'
import {
  Container,
  Content,
  ContentHeader,
  ContentHeaderDescription,
  ContentHeaderTitle,
  IconPurple,
  IconYellow,
  TitleSession,
} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosResponse } from 'axios'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import api from '~/services/api'
import { ResultNewOrder } from '~/types/AxiosResponses'
import { NewOrderProps } from '~/types/Order'
import { AddressForm } from './Forms/Address'
import { PaymentForm } from './Forms/Payment'
import { SelectedCoffees } from './Forms/SelectedCoffees'

const addressSchema = z.object({
  cep: z
    .string()
    .min(9, 'O CEP deve conter 8 caracteres')
    .max(9, 'O CEP deve conter 8 caracteres'),
  street: z.string().nonempty('O campo rua é obrigatório'),
  number: z.string().nonempty('O campo número é obrigatório'),
  neighborhood: z.string().nonempty('O campo bairro é obrigatório'),
  complement: z.string(),
  city: z.string().nonempty('O campo cidade é obrigatório'),
  state: z
    .string()
    .min(2, 'O estado deve conter 2 caracteres')
    .max(2, 'O estado deve conter 2 caracteres')
    .nonempty('O campo estado é obrigatório'),
})

const paymentSchema = z.object({
  paymentMethod: z
    .string({ invalid_type_error: 'Selecione o método de pagamento' })
    .nonempty('O método de pagamento é obrigatório'),
})

const itemSchema = z.object({
  coffee_id: z.string().nonempty('O ID do item é obrigatório'),
  quantity: z.number().min(1, 'A quantidade mínima é 1'),
})

const itemsSchema = z.array(itemSchema)

const formSchema = z.object({
  address: addressSchema,
  payment: paymentSchema,
  items: itemsSchema,
})

export type FormType = z.infer<typeof formSchema>

export function ShoppingCart() {
  const navigate = useNavigate()

  const allForms = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      address: {
        complement: '',
      },
    },
  })

  const { handleSubmit } = allForms

  return (
    <Container
      action=""
      onSubmit={handleSubmit(async (data) => {
        await api.post<
          ResultNewOrder,
          AxiosResponse<ResultNewOrder, NewOrderProps>,
          NewOrderProps
        >('/orders/create', {
          ...data.address,
          zip_code: data.address.cep,
          country: 'Brasil',
          order_items: data.items,
          payment_method: data.payment.paymentMethod,
        })

        navigate('/confirmed-order', { state: data })
      })}
    >
      <FormProvider {...allForms}>
        <Box style={{ width: '55%' }}>
          <TitleSession>Complete seu pedido</TitleSession>
          <Content>
            <ContentHeader>
              <IconYellow>
                <MapPinLine size={20} style={{ marginRight: '5px' }} />
              </IconYellow>
              <Box style={{ lineHeight: '22px' }}>
                <ContentHeaderTitle>Endereço de Entrega</ContentHeaderTitle>

                <ContentHeaderDescription>
                  Informe o endereço onde deseja receber seu pedido
                </ContentHeaderDescription>
              </Box>
            </ContentHeader>

            <AddressForm />
          </Content>
          <Content>
            <ContentHeader>
              <IconPurple>
                <CurrencyDollar size={20} style={{ marginRight: '5px' }} />
              </IconPurple>
              <Box style={{ lineHeight: '22px' }}>
                <ContentHeaderTitle>Pagamento</ContentHeaderTitle>

                <ContentHeaderDescription>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </ContentHeaderDescription>
              </Box>
            </ContentHeader>

            <PaymentForm />
          </Content>
        </Box>
        <Box style={{ width: '45%' }}>
          <TitleSession>Cafés selecionados</TitleSession>
          <SelectedCoffees />
        </Box>
      </FormProvider>
    </Container>
  )
}
