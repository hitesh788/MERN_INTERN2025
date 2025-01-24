import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; // Create this CSS file for custom styles

const LogIn = ({ onLogIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate after sign-in

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogIn(username, password); // Call onLogIn to set authentication
      navigate('/home'); // Redirect to home page after successful sign-in
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="fas fa-map"></i> {/* User icon */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="input-container">
          <i className="fas fa-lock"></i> {/* Lock icon */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit">Log In</button>
        </div>
        <br></br>
        <h25>* Insert any username and password</h25> {/* For testing purposes */}

      </form>
    </div>
  );
};

export default LogIn;
