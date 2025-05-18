import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
        { currentUser && (<NavBar />) }
        <Outlet />
        { currentUser && (<Footer />) }
    </div>
  )
}

export default Layout