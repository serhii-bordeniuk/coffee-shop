import React from "react";
import "./searchPanel.scss";

export const SearchPanel = ({ onUpdateSearch, filter, onFilterSelect }) => {
    const buttonsData = [
        { name: "all", label: "All" },
        { name: "brazil", label: "Brazil" },
        { name: "kenya", label: "Kenya" },
        { name: "columbia", label: "Columbia" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = filter === name;
        const clazz = active ? "btn-active" : "btn";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="searchPanel">
            <div className="wrapper">
                <div className="searchPanel__container">
                    <div className="inputGroup">
                        <h3>Looking for</h3>
                        <input
                            type="text"
                            className="searchInput"
                            placeholder="start typing here..."
                            onChange={(e) => onUpdateSearch(e.target.value)}
                        />
                    </div>
                    <div className="filterButtons">
                        <h3>Or filter</h3>
                        <div className="buttonGroup">{buttons}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
