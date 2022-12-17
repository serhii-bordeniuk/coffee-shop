import React from "react";
import "./footer.scss";
import logofooter from "../../resources/logofooter.svg";
import logofooterblack from "../../resources/logofooterblack.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__container">
                    <ul className="footerList">
                        <li className="listItem">
                            <img src={logofooter} alt="logo" />
                            <a href="" className="mainPageLink">
                                Coffee house
                            </a>
                        </li>
                        <li className="listItem">Our coffee</li>
                        <li className="listItem">For your pleasure</li>
                    </ul>
                    <div className="footerGroupLogo">
                        <span />
                        <img src={logofooterblack} alt="logo" />
                        <span />
                    </div>
                </div>
            </div>
        </footer>
    );
};
