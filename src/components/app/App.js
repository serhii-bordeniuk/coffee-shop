import "./app.scss";
import { Header } from "../header/Header";
import { MainPage } from "../pages/MainPage";
import { Footer } from "../footer/Footer";
import { AboutPage } from "../pages/AboutPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
