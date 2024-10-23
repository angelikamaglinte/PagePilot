import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';

const Dashboard = () => {
    const [booksCount, setBooksCount] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooksCount = async () => {
            try {
                const response = await axios.get('/books');
                setBooksCount(response.data.length); // Count the number of books
            } catch (err) {
                setError('Failed to fetch books count.');
            }
        };

        fetchBooksCount();
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <p>Total number of available books: {booksCount}</p>
            )}
        </div>
    )
}

export default Dashboard
