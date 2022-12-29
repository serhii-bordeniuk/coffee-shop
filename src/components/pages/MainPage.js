import React, { useEffect } from "react";
import { CoffeeItemsList } from "../coffeeItemsList/CoffeeItemsList";
import { SearchPanel } from "../searchPanel/SearchPanel";
import { useState } from "react";
import CoffeeService from "../../service/CoffeeService";

export const MainPage = () => {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("all");
    const [coffeeData, setCoffeeData] = useState([]);

    const { getData, loading, error } = CoffeeService();

    useEffect(() => {
        getData().then((res) => setCoffeeData(res));
    }, []);

    const onUpdateSearch = (query) => {
        setQuery(query);
    };

    const filterPost = (items, filter) => {
        switch (filter) {
            case "brazil":
                return items.filter((item) => item.country === "brazil");
            case "kenya":
                return items.filter((item) => item.country === "kenya");
            case "columbia":
                return items.filter((item) => item.country === "columbia");
            default:
                return items;
        }
    };

    const onFilterSelect = (filter) => {
        setFilter(filter);
    };

    const searchItems = (items, query) => {
        if (query.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.title.indexOf(query) > -1;
        });
    };

    const visibleData = filterPost(searchItems(coffeeData, query), filter);

    return (
        <div className="mainPage">
            <SearchPanel
                onUpdateSearch={onUpdateSearch}
                filter={filter}
                onFilterSelect={onFilterSelect}
            />
            <CoffeeItemsList
                coffeeData={visibleData}
                query={query}
                loading={loading}
                error={error}
            />
        </div>
    );
};
