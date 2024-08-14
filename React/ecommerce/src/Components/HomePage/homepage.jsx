import React from 'react'
import Navbar from '../Navbar/navbar'
import image from "../../Assests/Top-Ecommerce-Websites.jpg"
import "./homepage.css";
import Footer from '../Footer/footer';
import ContactUs from './ContactUs/contactus';
import Products from './Products/products';

export default function Homepage() {
  return (
    <div>
       <Navbar /> 
       <section id="home"> 
       <img src={image} alt="e-commerce" />
       </section> 
       <Products />
       <ContactUs />
       <Footer />  
    </div>
  )
}
