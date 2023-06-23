export type OrderItem = {
  coffee_id: string
  quantity: number
}

export type NewOrderProps = {
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  zip_code: string
  country: string
  complement: string
  payment_method: string
  order_items: OrderItem[]
}
