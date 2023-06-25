import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { Home } from './pages/Home'
import { MyOrders } from './pages/MyOrders'
import { ShoppingCart } from './pages/ShoppingCart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
