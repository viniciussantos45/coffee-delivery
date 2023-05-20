import { Box } from '~/components/Base'
import {
  Container,
  Content,
  ContentHeader,
  ContentHeaderDescription,
  ContentHeaderTitle,
  IconPurple,
  IconYellow,
  ItemCoffee,
  ItemCoffeeAction,
  ItemCoffeeImage,
  ItemCoffeeName,
  ItemCoffeeNameAndAction,
  SelectedCoffees,
  TitleSession,
} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import NumberInput from '~/components/NumberInput'
import { ShoppingCartContext } from '~/contexts/ShoppingCartContext'
import { AddressForm } from './Forms/Address'
import { PaymentForm } from './Forms/Payment'

const addressSchema = z.object({
  cep: z.string().min(8).max(8),
  street: z.string(),
  number: z.string(),
  neighborhood: z.string(),
  complement: z.string(),
  city: z.string(),
  state: z.string(),
})

const paymentSchema = z.object({
  paymentMethod: z.string(),
})

const itemSchema = z.object({
  id: z.string(),
  quantity: z.number(),
})

const itemsSchema = z.array(itemSchema)

const formSchema = z.object({
  address: addressSchema,
  payment: paymentSchema,
  items: itemsSchema,
})

type FormType = z.infer<typeof formSchema>

export function ShoppingCart() {
  const allForms = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const { handleSubmit } = allForms

  const { itemsCart, coffees } = useContext(ShoppingCartContext)

  const idsItemsCart = itemsCart.map((item) => item.id)

  return (
    <Container action="" onSubmit={handleSubmit(() => {})}>
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

          <SelectedCoffees>
            {coffees
              .filter((coffee) => idsItemsCart.includes(coffee.id))
              .map((coffee) => (
                <ItemCoffee key={coffee.id}>
                  <ItemCoffeeImage src={coffee.image} />
                  <ItemCoffeeNameAndAction>
                    <ItemCoffeeName>{coffee.name}</ItemCoffeeName>
                    <ItemCoffeeAction>
                      <NumberInput />
                    </ItemCoffeeAction>
                  </ItemCoffeeNameAndAction>
                </ItemCoffee>
              ))}
          </SelectedCoffees>
        </Box>
      </FormProvider>
    </Container>
  )
}
