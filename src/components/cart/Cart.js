import "./cart.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../cartItem/CartItem";

export const Cart = ({ cartActive, setCartActive }) => {
    const renderItems = (arr) => {
        const items = arr.map((item) => {
            return <CartItem item={item} key={item.id} />;
        });
        return items;
    };

    const totalPrice = useSelector((state) => state.totalPrice.toFixed(2));

    const cartData = useSelector((state) => state.cart);

    const items = renderItems(cartData);

    const content = items.length > 0 ? items : <div className="emptyCart">The cart is empty</div>;

    return (
        <div className={`cart ${cartActive ? "active" : ""}`} onClick={() => setCartActive(false)}>
            <div
                className={`cartInner ${cartActive ? "active " : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="cartInfoTop">
                    <h1 className="cartTitle">Cart</h1>
                    <button className="cartCloseButton" onClick={() => setCartActive(false)}>
                        x
                    </button>
                </div>
                <div className="cartMain">
                    <div className="cartList">{content}</div>
                </div>
                <div className="cartBottom">
                    <div className="cartBottomTotal">{`Total price: ${totalPrice}$`}</div>
                </div>
            </div>
        </div>
    );
};
