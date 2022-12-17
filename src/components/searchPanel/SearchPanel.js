import React from "react";
import "./searchPanel.scss";

export const SearchPanel = () => {
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
                        />
                    </div>
                    <div className="filterButtons">
                        <h3>Or filter</h3>
                        <div className="buttonGroup">
                            <button className="filterButton brazil" type="button">
                                Brazil
                            </button>
                            <button className="filterButton kenya" type="button">
                                Kenya
                            </button>
                            <button className="filterButton columbia" type="button">
                                Columbia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
