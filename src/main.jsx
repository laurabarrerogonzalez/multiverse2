import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NavbarView from './components/Nav/Nav.jsx';
import Home from './views/Home/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer.jsx';
import Comics from './views/comics/comics';
import Figures from './views/figures/figures'; 
import Funkos from './views/funkopops/funkos'; 
import Posters from './views/posters/poster';
import Shirts from './views/shirts/shirts'; 
import Login from './components/Login/Login.jsx';
import Admin from './components/Admin/Admin.jsx';
import Register from './components/Register/register.jsx';

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <div className="scroll">
        <Header />

        {/* Rutas con Navbar debajo del Header */}
        <Routes>
          <Route path="/" element={<React.Fragment><NavbarView /><Home /></React.Fragment>} />
          <Route path="/admin" element={<React.Fragment><NavbarView /><Admin /></React.Fragment>} />
          <Route path="/carrito" element={<React.Fragment><NavbarView /><Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} /></React.Fragment>} />
          <Route path="/comics" element={<React.Fragment><NavbarView /><Comics addToCart={addToCart} cart={cart} /></React.Fragment>} />
          <Route path="/figuras" element={<React.Fragment><NavbarView /><Figures addToCart={addToCart} cart={cart} /></React.Fragment>} />
          <Route path="/funkos" element={<React.Fragment><NavbarView /><Funkos addToCart={addToCart} cart={cart} /></React.Fragment>} />
          <Route path="/posters" element={<React.Fragment><NavbarView /><Posters addToCart={addToCart} /></React.Fragment>} />
          <Route path="/shirts" element={<React.Fragment><NavbarView /><Shirts addToCart={addToCart} /></React.Fragment>} />
        </Routes>

        {/* Rutas sin Navbar debajo del Header */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Otras rutas sin Navbar... */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Main />);
