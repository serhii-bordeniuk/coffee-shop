import React from "react";
import "./coffeeItemsList.scss";
import { CoffeeItem } from "../coffeeItem/CoffeeItem";

export const CoffeeItemsList = () => {
    return (
        <div className="coffeeItemsList">
            <div className="wrapper">
                <div className="coffeeItemsList__container">
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                    <CoffeeItem />
                </div>
            </div>
        </div>
    );
};
