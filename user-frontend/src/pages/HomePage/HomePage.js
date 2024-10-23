import React from 'react'
import Avatar from '../../components/Avatar/Avatar';

const HomePage = () => {
    const username = localStorage.getItem('username');

    return (
        <div>
            <h1>Home Page</h1>
            {username && <Avatar username={username} />}
        </div>
    )
}

export default HomePage
