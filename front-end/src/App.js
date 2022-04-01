import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from './pages/login';
import Cart from "./pages/cart"
import Products from './components/Products';
import Productdetail from "./pages/productdetail"
import Signup from './pages/Signup';
import React, { useState } from 'react';
import Success from './pages/success'
import Failure from './pages/failure'
function App() {



  return (
      <>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/productdetail" element={<Productdetail  />}/>
            <Route path="/success" element={<Success />}/>
            <Route path="/failure" element={<Failure />}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    </>
  );
}

export default App;
