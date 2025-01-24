import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = ({ onLogOut }) => {
    const navigate = useNavigate(); // Hook to navigate after logout
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogOut = () => {
        onLogOut(); // Reset authentication state to false
        setIsLoggedOut(true); // Set the logout status
        setTimeout(() => {
            navigate('/'); // Redirect to login page after 3 seconds
        }, 3000); // 3 seconds delay
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Log Out</h2>
            <div>
                <h3>You are logged in!</h3>
                <button onClick={handleLogOut}>Log Out</button>
                {isLoggedOut && <p>You have been logged out successfully!</p>}
            </div>
        </div>
    );
};

export default LogOut;
