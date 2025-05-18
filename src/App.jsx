import React from 'react'
import "./Style/index.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useSelector } from 'react-redux';
import Search from './Pages/Search';

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={currentUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={currentUser ? <Navigate to="/" /> : <Login />} />
          <Route path = "/search" element = {<Search />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App