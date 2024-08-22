import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && pass) {
          navigate('/grid');
        }
      };

     const navigate = useNavigate();

     const isFormValid = email !== '' && pass !== '';

    return (
        <div className="auth-form-container">
            <div>           
                <img 
                src="/img/airplane.jpeg" 
                alt="Profile" 
                className="profile-image"
            />
            </div>
 
            <h2 style={{ fontSize: '2em' }}>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="email">Email</label> */}
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
                {/* <label htmlFor="password">Password</label> */}
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                
                <button type="submit" disabled={!isFormValid}>Log In</button>
                
            </form>
            <button className="link-btn" onClick={() => navigate('/register')}>
             Don't have an account? Register here.
            </button>
        </div>
    )
}