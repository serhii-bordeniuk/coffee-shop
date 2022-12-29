import React from "react";
import "./header.scss";
import background from "../../resources/background.png";
import logo from "../../resources/logo.svg";
import shoppingcart from "../../resources/shopping-cart.png";
import { Link } from "react-router-dom";

export const Header = ({ updateActiveCart }) => {
    return (
        <header className="header" style={{ backgroundImage: `url(${background})` }}>
            <div className="wrapper">
                <div className="header__container">
                    <div className="headerLinks">
                        <div className="headerLeft">
                            <Link to="/" className="mainPageLink">
                                <img src={logo} alt="logo" />
                                Coffee house
                            </Link>
                            <a className="itemLink">Our coffee</a>
                        </div>
                        <div className="headerRight">
                            <img
                                src={shoppingcart}
                                className="cartIcon"
                                onClick={() => updateActiveCart(true)}
                            ></img>
                        </div>
                    </div>
                    <h1 className="pageTitle">Our coffee</h1>
                </div>
            </div>
        </header>
    );
};
