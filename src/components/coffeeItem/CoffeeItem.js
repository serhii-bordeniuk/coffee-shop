import React from "react";
import "./coffeeItem.scss";
import coffeeImage from "../../resources/coffee.jpg";
import cart from "../../resources/cart.png";

import { Link } from "react-router-dom";
export const CoffeeItem = () => {
    return (
        <div className="coffeeItem">
            <Link to="/about" className="itemTopGroup">
                <img className="coffeeImage" src={coffeeImage} alt="coffeeItem" />
                <div className="title">AROMISTICO Coffee 1 kg</div>
            </Link>
            <div className="itemBottomGroup">
                <h3 className="countryOfOrigin">Brazil</h3>
                <div className="priceAndCart">
                    <img src={cart} alt="" className="cart" />

                    <div className="price">6,99$</div>
                </div>
            </div>
        </div>
    );
};
