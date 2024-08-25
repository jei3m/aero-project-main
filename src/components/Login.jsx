import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Forms.css'; // Ensure this import is present to apply styles

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();
    const isFormValid = email !== '' && pass !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            navigate('/select');
        }
    };

    return (
        <div className="Appokform">
            <div className="Appcardform">
                <div>
                    <img 
                        src="/img/alogo.png" 
                        alt="Login Illustration" 
                        className="profile-image"
                    />
                </div>
                <h2 style={{ fontSize: '2em' }}>Login</h2>
                <form className="auth-form-container" onSubmit={handleSubmit}>
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        name="email" 
                    />
                    <input 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)} 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        name="password" 
                    />
                    <button 
                        className={`buttonform ${isFormValid ? 'active' : 'inactive'}`} 
                        type="submit" 
                        disabled={!isFormValid}
                    >
                        Log In
                    </button>
                </form>
                <button className="link-btn" onClick={() => navigate('/register')}>
                    Don't have an account? Register here.
                </button>
            </div>
        </div>
    );
}
