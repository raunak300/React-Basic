import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Routes() {
  return (
    <>
      <Header />

      <Outlet />  
      {/* // this will dynmically handel things what will come in between header and footer stays liek thsi only and no need to change is here in between */}

      {/* outlet will carry the home--about etc */}
      <Footer />

    </>
  )
}

export default Routes