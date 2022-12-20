import React from "react";
import { CoffeeItemsList } from "../coffeeItemsList/CoffeeItemsList";
import { SearchPanel } from "../searchPanel/SearchPanel";

export const MainPage = () => {
    return (
        <div className="mainPage">
            <SearchPanel />
            <CoffeeItemsList />
        </div>
    );
};
