import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const navigate = useNavigate();

    return (
        <div className="auth-form-container">
            
            <div>           
                <img 
                src="/img/airplane.jpeg" 
                alt="Profile" 
                className="profile-image"
            />
            </div>
            
            <h2 style={{ fontSize: '2em' }}>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Full name</label> */}
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            {/* <label htmlFor="email">email</label> */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
            {/* <label htmlFor="password">password</label> */}
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => navigate('/login')}>
             Already have an account? Login here.
            </button>
    </div>
    )
}