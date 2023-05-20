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
  addItem: (id: string, quantity: number) => void
}

export type ShoppingCartProviderProps = {
  children: React.ReactNode
}
