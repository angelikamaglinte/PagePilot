import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAdminLoggedIn }) => {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/'); // redirect to login page
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('isAdminLoggedIn', 'false'); // Clear isAdminLoggedIn flag
    
    // Update the isAdminLoggedIn state to false
    setIsAdminLoggedIn(false);
    navigate('/'); // redirect to login page
  };
  

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
