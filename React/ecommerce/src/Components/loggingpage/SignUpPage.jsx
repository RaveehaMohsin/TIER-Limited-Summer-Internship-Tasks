import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import LoggingForm from './loggingform/signupform'

export default function LoggingPage() {

  return (
    <div>
       <Navbar />
       <LoggingForm condition1={true}/>
       <Footer />
    </div>
  )
}