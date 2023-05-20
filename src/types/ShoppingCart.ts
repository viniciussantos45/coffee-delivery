import React from 'react'

export type CoffeeProps = {
  id: string
  name: string
  description: string
  price: number
  image: string
  additions: string[]
}

export type ItemCart = {
  id: string
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
}

export type ShoppingCartProviderProps = {
  children: React.ReactNode
}
