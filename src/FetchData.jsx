import React, { useState, useEffect } from 'react';
const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []); // Empty dependency array ensures the effect runs only once
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    );
}; export default FetchData