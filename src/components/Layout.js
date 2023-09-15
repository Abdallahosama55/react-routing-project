import React, { Fragment } from 'react'
import Navbar_comp from './Navbar'
import { Footerr } from './footer'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
    <Navbar_comp/>
    <Outlet/>
    <Footerr></Footerr>
    
    
    
    </Fragment>
  )
}

export default Layout