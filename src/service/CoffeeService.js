import { useState, useCallback } from "react";
import axios from "axios";

const CoffeeService = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        setLoading(true);

        try {
            const response = await axios.get("https://6308173c46372013f5762546.mockapi.io/coffee");
            setLoading(false);
            return response.data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {
        getData,
        loading,
        clearError,
    };
};

export default CoffeeService;
