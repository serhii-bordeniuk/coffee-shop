import React from "react";
import coffee from "../../resources/coffee.jpg";
import "./cartItem.scss";
import { removeFromCart, itemsTotal, inc, dec } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const [price, setPrice] = useState(item.price);

    const currentPrice = price * item.quantity;

    const onRemoveItem = (data) => {
        dispatch(removeFromCart(data));
        dispatch(itemsTotal());
    };

    const onIncItem = (data) => {
        dispatch(inc(data));
        dispatch(itemsTotal());
    };

    const onDecItem = (data) => {
        dispatch(dec(data));
        dispatch(itemsTotal());
    };

    return (
        <div className="cartItem">
            <img className="cartItemImage" src={item.image} alt="coffee" />
            <div className="cartItemLeft">
                <div className="title">{item.title}</div>
                <div className="country">{item.country}</div>
            </div>
            <div className="cartItemRight">
                <div className="buttonsGroup">
                    <div className="counterGroup">
                        <button className="counterButton dec" onClick={() => onDecItem(item)}>
                            -
                        </button>
                        <div className="count">{item.quantity}</div>
                        <button className="counterButton inc" onClick={() => onIncItem(item)}>
                            +
                        </button>
                    </div>
                    <div className="price">{`${currentPrice}$`}</div>
                </div>
                <button className="deleteButton" onClick={() => onRemoveItem(item)}>
                    x
                </button>
            </div>
        </div>
    );
};

export default CartItem;
