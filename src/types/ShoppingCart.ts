import React from 'react'

export type CoffeeProps = {
  id: string
  coffee_name: string
  description: string
  price: number
  image_path: string
  additions: string[]
}

export type ItemCart = {
  coffee_id: string
  quantity: number
}

export type ShoppingCartContextType = {
  itemsCart: ItemCart[]
  quantityItemsInCart: number
  coffees: CoffeeProps[]
  totalCart: number
  addItem: (id: string, quantity: number) => void
  decrementItem: (id: string) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export type ShoppingCartProviderProps = {
  children: React.ReactNode
}
