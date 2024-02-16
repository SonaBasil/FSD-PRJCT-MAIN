const { useEffect, useState } = require("react");
const axios = require("axios").default;

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Changed to null

    useEffect(() => {
        let mounted = true; // Flag to track if component is mounted

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                if (mounted) { // Check if component is still mounted before updating state
                    setData(res.data);
                    setError(null); // Reset error state if request is successful
                }
            } catch (err) {
                if (mounted) {
                    setError(err.message); // Set error message
                }
            }
            setLoading(false);
        };

        fetchData();

        return () => {
            mounted = false; // Cleanup function to set mounted flag to false when component unmounts
        };
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            setError(null); // Reset error state if request is successful
        } catch (err) {
            setError(err.message); // Set error message
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;
