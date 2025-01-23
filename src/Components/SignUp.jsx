import React, { useState } from 'react';
import '../../src/css/LoginPage.css';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        // Add logic for authentication here
    };

    return (
        <div className="login-container">
            <div className="form-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <a href="/home">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </a>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;