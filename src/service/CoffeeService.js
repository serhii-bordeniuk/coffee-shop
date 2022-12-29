import { useState } from "react";
import axios from "axios";

const CoffeeService = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getData = async () => {
        setLoading(true);
        const response = await axios.get("https://6308173c46372013f5762546.mockapi.io/coffee");
        setLoading(false);
        return response.data;
    };

    return {
        getData,
        loading,
    };
};

export default CoffeeService;
