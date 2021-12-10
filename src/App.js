import React from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { Checkout } from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
