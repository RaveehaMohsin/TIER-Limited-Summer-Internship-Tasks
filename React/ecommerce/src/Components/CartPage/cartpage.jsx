import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import CartTable from './Cart Table/carttable'

export default function Cartpage() {
  return (
    <div>
      <Navbar />
      <CartTable />
      <Footer />
    </div>
  )
}
