import React from "react";
import "./coffeeItem.scss";
import cart from "../../resources/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, itemsTotal } from "../../actions";

import { useNavigate } from "react-router-dom";
export const CoffeeItem = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (path, item) => {
        navigate(path, { state: item });
    };

    const onAddItem = (data) => {
        dispatch(addToCart(data));

        dispatch(itemsTotal());
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
                    {item.title}
                </div>
                <h3 className="countryOfOrigin">{item.country}</h3>
                <div className="priceAndCart">
                    <img src={cart} alt="" className="cartIcon" onClick={() => onAddItem(item)} />

                    <div className="price">{item.price}$</div>
                </div>
            </div>
        </div>
    );
};
