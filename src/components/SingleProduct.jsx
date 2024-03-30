import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/navbar/navbarSlice";

import "../styles/SingleProduct.css";

function SingleProduct(props) {

    // console.log(props.productDetails);

    const dispatch = useDispatch();

    return (

        <div id="single-product-container">

            <div className="flex-item">
                <img src={props.productDetails.thumbnail} alt="product image" />
            </div>

            <div id="details" className="flex-item">
                <h2 id="brand">{props.productDetails.brand}</h2>
                {/* <h2 id="title">{props.productDetails.title}</h2> */}
                <div id = "title-category" >
                    <h2 id="title">{props.productDetails.title}</h2>
                    <h2 id="title">Category: {props.productDetails.category}</h2>
                </div>

                <h2 id="General"><span style={{fontWeight: "bolder"}}>Sizes Available - </span> {props.productDetails.size}</h2>
                <h2 id="General"><span style={{fontWeight: "bolder"}}>Fininshes Available - </span> {props.productDetails.finish}</h2>
                <h2 id="General"> <span style={{fontWeight: "bolder"}}>Lock - </span> {props.productDetails.lock}</h2>
                <h2 id="description"> <span style={{fontWeight: "bolder"}}>Description - </span> {props.productDetails.description}</h2>


                <div id="price-container">
                    <h2 id="price">
                        <span>₹</span>
                        {props.productDetails.price} - {props.productDetails.price2}
                    </h2>
                </div>

                <button onClick={() => dispatch(add(props.productDetails))}>Add to cart</button> {/* Sepete ekleme işlemi */}

                {/* <h2 id="description"> <span style={{fontWeight: "bolder"}}>Important Note - </span> Pricing of a product may vary according to the sizes and the Finishes. Kindly refer to the CATALOUGE or CONTACT us for more accurate Details</h2> */}
            </div>
        </div>
    )
};

export default SingleProduct;
