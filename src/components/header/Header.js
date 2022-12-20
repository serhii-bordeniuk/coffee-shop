import React from "react";
import "./header.scss";
import background from "../../resources/background.jpg";
import logo from "../../resources/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${background})` }}>
            <div className="wrapper">
                <div className="header__container">
                    <div className="headerLinks">
                        <img src={logo} alt="logo" />
                        <Link to="/" className="mainPageLink">
                            Coffee house
                        </Link>
                    </div>
                    <h1 className="pageTitle">Our coffee</h1>
                </div>
            </div>
        </header>
    );
};
