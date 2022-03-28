import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from './pages/login';
import Cart from "./pages/cart"
import Productdetail from "./pages/productdetail"

function App() {
  return (
      <>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/productdetail" element={<Productdetail />}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    </>
  );
}

export default App;
