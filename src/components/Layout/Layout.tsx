import React from 'react'
import HeaderApp from '../header/HeaderApp';
import { Outlet } from 'react-router-dom';
import Foot from '../footer/Foot';

const Layout = () => {
  return (
    <>
    <HeaderApp />
    <Outlet />
    <Foot />
    </>
  )
}

export default Layout;