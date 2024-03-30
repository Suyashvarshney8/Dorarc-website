import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/navbar/navbarSlice";
import ConImg from "../../assets/Contact.jpg";

import "../styles/About.css";

function SingleProduct(props) {

    // console.log(props.productDetails);

    const dispatch = useDispatch();

    return (

        <div id="single-container">

            <div className="flex-item">
            <img src={ConImg} alt="About" />
            </div>

           
        </div>
    )
};

export default SingleProduct;
