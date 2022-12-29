import React from "react";
import "./coffeeItemsList.scss";
import { CoffeeItem } from "../coffeeItem/CoffeeItem";
import Spinner from "../spinner/Spinner";

export const CoffeeItemsList = ({ coffeeData, loading, error }) => {
    const renderItems = (arr) => {
        const items = arr.map((item) => {
            return <CoffeeItem key={item.id} item={item} />;
        });
        return items;
    };

    const items = renderItems(coffeeData);

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <div>Something went wrong</div> : null;

    return (
        <div className="coffeeItemsList">
            <div className="wrapper">
                <div className={`coffeeItemsList__container ${loading ? "loading" : null}`}>
                    {errorMessage}
                    {spinner}
                    {items}
                </div>
            </div>
        </div>
    );
};
