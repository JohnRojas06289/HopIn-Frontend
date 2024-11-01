import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import bg from '../../assets/images/halftone-nissan-skyline-r-series-poster.png'

const Layout = () => {

   return (
      <>
         <div>
            <Header />
            <Routers />    
         </div>
      </>
   )
}

export default Layout