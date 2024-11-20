import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer';

const Layout = () => {

   return (
      <>
         <div>
            <Header />
            <Routers />    
            <Footer/>
         </div>
      </>
   )
}

export default Layout