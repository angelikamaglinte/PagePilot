import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/signup">
                <button>Get Started</button>
            </Link>
        </div>
    )
}

export default LandingPage
