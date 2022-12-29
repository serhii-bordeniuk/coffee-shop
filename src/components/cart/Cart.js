import "./cart.scss";
import React from "react";
import coffee from "../../resources/coffee.jpg";

export const Cart = ({ cartActive, setCartActive }) => {
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
                    <div className="cartList">
                        <div className="cartItem">
                            <img className="cartItemImage" src={coffee} alt="coffee" />
                            <div className="cartItemLeft">
                                <div className="title">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Columbia</div>
                            </div>
                            <div className="cartItemRight">
                                <div className="buttonsGroup">
                                    <div className="counterGroup">
                                        <button className="counterButton dec">-</button>
                                        <div className="count">1</div>
                                        <button className="counterButton inc">+</button>
                                    </div>
                                    <div className="price">6.99$</div>
                                </div>
                                <button className="deleteButton">x</button>
                            </div>
                        </div>
                        <div className="cartItem">
                            <img className="cartItemImage" src={coffee} alt="coffee" />
                            <div className="cartItemLeft">
                                <div className="title">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Columbia</div>
                            </div>
                            <div className="cartItemRight">
                                <div className="buttonsGroup">
                                    <div className="counterGroup">
                                        <button className="counterButton dec">-</button>
                                        <div className="count">1</div>
                                        <button className="counterButton inc">+</button>
                                    </div>
                                    <div className="price">6.99$</div>
                                </div>
                                <button className="deleteButton">x</button>
                            </div>
                        </div>
                        <div className="cartItem">
                            <img className="cartItemImage" src={coffee} alt="coffee" />
                            <div className="cartItemLeft">
                                <div className="title">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Columbia</div>
                            </div>
                            <div className="cartItemRight">
                                <div className="buttonsGroup">
                                    <div className="counterGroup">
                                        <button className="counterButton dec">-</button>
                                        <div className="count">1</div>
                                        <button className="counterButton inc">+</button>
                                    </div>
                                    <div className="price">6.99$</div>
                                </div>
                                <button className="deleteButton">x</button>
                            </div>
                        </div>
                        <div className="cartItem">
                            <img className="cartItemImage" src={coffee} alt="coffee" />
                            <div className="cartItemLeft">
                                <div className="title">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Columbia</div>
                            </div>
                            <div className="cartItemRight">
                                <div className="buttonsGroup">
                                    <div className="counterGroup">
                                        <button className="counterButton dec">-</button>
                                        <div className="count">1</div>
                                        <button className="counterButton inc">+</button>
                                    </div>
                                    <div className="price">6.99$</div>
                                </div>
                                <button className="deleteButton">x</button>
                            </div>
                        </div>
                        <div className="cartItem">
                            <img className="cartItemImage" src={coffee} alt="coffee" />
                            <div className="cartItemLeft">
                                <div className="title">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Columbia</div>
                            </div>
                            <div className="cartItemRight">
                                <div className="buttonsGroup">
                                    <div className="counterGroup">
                                        <button className="counterButton dec">-</button>
                                        <div className="count">1</div>
                                        <button className="counterButton inc">+</button>
                                    </div>
                                    <div className="price">6.99$</div>
                                </div>
                                <button className="deleteButton">x</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartBottom">
                    <div className="cartBottomTotal">Total price: 150.00$</div>
                </div>
            </div>
        </div>
    );
};
