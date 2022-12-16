import React from "react";
import "./Header.scss";
import background from "../../resources/background.jpg";
import logo from "../../resources/logo.svg";

export const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${background})` }}>
            <div className="wrapper">
                <div className="container">
                    <div className="headerLinks">
                        <img src={logo} alt="logo" />
                        <a href="" className="mainPageLink">
                            Coffee house
                        </a>
                    </div>
                    <h1 className="pageTitle">Our coffee</h1>
                </div>
            </div>
        </header>
    );
};
