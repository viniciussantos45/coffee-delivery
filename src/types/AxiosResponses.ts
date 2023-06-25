import { Order } from './Order'
import { CoffeeProps } from './ShoppingCart'

export type ResultCoffees = {
  coffees: CoffeeProps[]
}

export type ResultNewOrder = {
  message: string
}

export type ResultOrders = {
  orders: Order[]
}
