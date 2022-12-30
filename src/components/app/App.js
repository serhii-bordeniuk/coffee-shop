import "./app.scss";
import { Header } from "../header/Header";
import { MainPage } from "../pages/MainPage";
import { Footer } from "../footer/Footer";
import { AboutPage } from "../pages/AboutPage";
import { Cart } from "../cart/Cart";
import { useState, useEffect } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [cartActive, setCartActive] = useState(false);

    useEffect(() => {
        if (cartActive) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    }, [cartActive]);

    const updateActiveCart = (value) => {
        setCartActive(value);
    };
    return (
        <Router>
            <div className="app">
                <Header updateActiveCart={updateActiveCart} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/items/:id" element={<AboutPage />} />
                    <Route path="*" element={<ErrorMessage />} />
                </Routes>
                <Cart cartActive={cartActive} setCartActive={setCartActive} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
