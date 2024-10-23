import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Send a POST request to the signup API
            const response = await axios.post('http://localhost:5000/auth/signup', {
                username,
                password
            });

            // Store the token and redirect to login page
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', username);
            navigate('/login');
        } catch (error) {
            console.error(error); // Log the error for debugging
            setError('Failed to signup using credentials.');
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SignupPage;
