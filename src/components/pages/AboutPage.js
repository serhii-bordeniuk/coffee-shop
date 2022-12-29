import React from "react";
import "./aboutPage.scss";
import itemimage from "../../resources/itemimage.svg";
import logofooterblack from "../../resources/logofooterblack.svg";
import { useLocation } from "react-router-dom";

export const AboutPage = () => {
    let location = useLocation();
    const item = location.state;

    return (
        <div className="aboutPage">
            <div className="wrapper">
                <div className="aboutPage__container">
                    <img src={item.image} alt="coffee" className="aboutImage" />
                    <div className="aboutGroupInfo">
                        <div className="infoTop">
                            <h1 className="title">{item.title}</h1>
                            <div className="groupLogo">
                                <span />
                                <img src={logofooterblack} alt="logo" />
                                <span />
                            </div>
                        </div>
                        <div className="infoBottom">
                            <div className="country">
                                Country: <span>{item.country}</span>
                            </div>
                            <div className="description">
                                Description:
                                <span>
                                    ⠀Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Aliquam facere deserunt, omnis alias eum sed quos debitis quod.
                                    Rerum, totam.
                                </span>
                            </div>
                            <div className="price">
                                Price:
                                <span>{`${item.price} $`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
