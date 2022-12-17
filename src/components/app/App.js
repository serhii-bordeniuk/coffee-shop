import "./app.scss";
import { Header } from "../navbar/Header";
import { SearchPanel } from "../searchPanel/SearchPanel";
import { CoffeeItemsList } from "../coffeeItemsList/CoffeeItemsList";
import { Footer } from "../footer/Footer";

function App() {
    return (
        <div className="app">
            <Header />
            <SearchPanel />
            <CoffeeItemsList />
            <Footer />
        </div>
    );
}

export default App;
