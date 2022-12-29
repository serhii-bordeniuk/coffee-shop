import React from "react";
import "./coffeeItem.scss";
import cart from "../../resources/cart.png";

import { Link, useNavigate } from "react-router-dom";
export const CoffeeItem = ({ item }) => {
    const splitted = item.title.split(" ");
    const navigate = useNavigate();

    const handleNavigate = (path, item) => {
        navigate(path, { state: item });
    };

    return (
        <div className="coffeeItem" key={item.id}>
            <div
                className="itemTopGroup"
                onClick={() => {
                    handleNavigate(`/items/${item.id}`, item);
                }}
            >
                <img className="coffeeImage" src={item.image} alt="coffeeItem" />
            </div>
            <div className="itemBottomGroup">
                <div
                    className="title"
                    onClick={() => {
                        handleNavigate(`/items/${item.id}`, item);
                    }}
                >
                    {splitted.map((item) => {
                        if (item[0]) {
                            return <span>{item} </span>;
                        } else {
                            <span>{item} </span>;
                        }
                    })}{" "}
                </div>
                <h3 className="countryOfOrigin">{item.country}</h3>
                <div className="priceAndCart">
                    <img src={cart} alt="" className="cartIcon" />

                    <div className="price">{item.price}$</div>
                </div>
            </div>
        </div>
    );
};
