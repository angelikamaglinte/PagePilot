import React, { useState } from 'react';
import './Avatar.css'

const Avatar = ({ username }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    // Function to get initials from the username
    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map(n => n.charAt(0).toUpperCase()).join('');
        return initials;
    };

    return (
        <div className="avatar-container">
            <div
                className="avatar"
                onClick={handleToggleDropdown}
            >
                {getInitials(username)}
            </div>
            {dropdownOpen && (
                <div className="dropdown">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default Avatar;
