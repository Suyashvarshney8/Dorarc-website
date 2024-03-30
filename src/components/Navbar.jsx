// import React from "react";
// import { BsHandbag } from 'react-icons/bs';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { TbBrandHexo } from 'react-icons/tb';

// import "../styles/Navbar.css";

// function Navbar() {

//     const products = useSelector(state => state.navbarReducer.value); // products is an array

//     // Sepetteki toplam ürün sayısını hesaplama (navbarda göstermek için)
//     function numberOfProducts() {
//         let number = 0;
//         for (let i = 0; i < products.length; i++) {
//             number += products[i].quantity;
//         }
//         return number;
//     }

//     const navigate = useNavigate();

//     function handleClickIcon() {
//         navigate("/");
//         window.scroll({ top: 0, behavior: 'smooth' });
//     }

//     function handleClickHandBag() {
//         navigate("/shoppingCart");
//         window.scroll({ top: 0, behavior: 'smooth' });
//     }

//     return (
//         <div id="navbar-container">
//             <div id="icon"><TbBrandHexo id="icon-in-div" onClick={handleClickIcon} /></div>
//             <BsHandbag id="hand-bag" onClick={handleClickHandBag} />
//             <div id="number-of-products">{numberOfProducts()}</div>
//         </div>
//     )
// };

// export default Navbar;
import React from "react";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbBrandHexo } from "react-icons/tb";

import "../styles/Navbar.css";

import logoImage from "../../assets/D.jpg"; // Import your logo image here

function Navbar() {
  const products = useSelector((state) => state.navbarReducer.value); // products is an array

  // Sepetteki toplam ürün sayısını hesaplama (navbarda göstermek için)
  function numberOfProducts() {
    let number = 0;
    for (let i = 0; i < products.length; i++) {
      number += products[i].quantity;
    }
    return number;
  }

  const navigate = useNavigate();

  function handleClickIcon() {
    navigate("/");
    window.scroll({ top: 0, behavior: "smooth" });
  }

  function handleClickHandBag() {
    navigate("/shoppingCart");
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <div id="navbar-container">
    <div id="dropdown">
        <button className="dropbtn1">≡</button>
        <div className="dropdown-content">
        <a
          href="https://drive.google.com/file/d/1sC4aBbFhDQTIM50n43O4ZGVLbsOTby09/view?usp=sharing"
          target="_blank"
        >
          CATALOUGE
        </a>
          <a href="/about">ABOUT US</a>
          <a href="/contact">CONTACT US</a>
          {/* Add more categories as needed */}
        </div>
      </div>

      {/* <div id="icon"><TbBrandHexo id="icon-in-div" onClick={handleClickIcon} /></div> */}
      <img src={logoImage} alt="Logo" id="logo" onClick={handleClickIcon} />
      <div id="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <a href="/categ1">BRASS CARVING MORTICE HANDLES</a>
          <a href="/cat2">BRASS FORGING MORTICE HANDLES</a>
          <a href="/cat3">BRASS HALF ROUND HANDLES</a>
          <a href="/cat4">BRASS PULL HANDLES</a>
          <a href="/cat5">BRASS CABINET HANDLES</a>
          <a href="/cat6">MORTICE LOCK AND CYLINDER</a>
          <a href="/cat7">MORTICE ROSE HANDLES</a>
          <a href="/cat8">DOOR KNOCKERS AND STOPPERS</a>
          <a href="/cat9">SOLID BRASS HOOKS</a>
          {/* Add more categories as needed */}
        </div>
      </div>
      <div id="about-link">
        <a
          href="https://drive.google.com/file/d/1sC4aBbFhDQTIM50n43O4ZGVLbsOTby09/view?usp=sharing"
          target="_blank"
        >
          CATALOUGE
        </a>
      </div>
      <div id="about-link">
        <a href="/about">ABOUT US</a>
      </div>
      <div id="about-link" style={{ marginRight: "600px" }}>
        <a href="/contact">CONTACT US</a>
      </div>
      <div id="bag-products-container">
        <BsHandbag id="hand-bag" onClick={handleClickHandBag} />
        <div id="number-of-products">{numberOfProducts()}</div>
      </div>
    </div>
  );
}

export default Navbar;
