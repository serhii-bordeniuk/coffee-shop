import React from "react";
import "./coffeeItem.scss";
import coffeeImage from "../../resources/coffee.jpg";
import cart from "../../resources/cart.png";

export const CoffeeItem = () => {
    return (
        <div className="coffeeItem">
            <img className="coffeeImage" src={coffeeImage} alt="coffeeItem" />
            <div className="itemInfo">
                <h3 className="title">AROMISTICO Coffee 1 kg</h3>
                <h3 className="countryOfOrigin">Brazil</h3>
                <div className="priceAndCart">
                    <img src={cart} alt="" className="cart" />
                    <div className="price">6,99$</div>
                </div>
            </div>
        </div>
    );
};
