import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/features/products/productsSlice";

// Components
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Products from "./components/Products";
import Details from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/About";
import Contact from "./components/Contact";
import Cat1 from "./components/Category/cat1"
import Cat2 from "./components/Category/cat2"
import Cat3 from "./components/Category/cat3"
import Cat4 from "./components/Category/cat4"
import Cat5 from "./components/Category/cat5"
import Cat6 from "./components/Category/cat6"
import Cat7 from "./components/Category/cat7"
import Cat8 from "./components/Category/cat8"
import Cat9 from "./components/Category/cat9"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import "../src/styles/App.css";

function App() {

  const dispatch = useDispatch();

  // Sayfa yüklendiğinde ürünler axios ile çekilecek.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const loading = useSelector(state => state.productsReducer.loading);

  return (

    <Router>

      <Toaster />

      <Navbar />

      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Products />} />
        <Route path="/details/:id" element={<Details />} /> {/* "id" dinamik olarak değişeceği için ":" kullandık.  */}
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categ1" element={<Cat1 />} />
        <Route path="/cat2" element={<Cat2 />} />
        <Route path="/cat3" element={<Cat3 />} />
        <Route path="/cat4" element={<Cat4 />} />
        <Route path="/cat5" element={<Cat5 />} />
        <Route path="/cat6" element={<Cat6 />} />
        <Route path="/cat7" element={<Cat7 />} />
        <Route path="/cat8" element={<Cat8 />} />
        <Route path="/cat9" element={<Cat9 />} />
      </Routes>

    </Router>
  )
};

export default App;
