import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();
    const isFormValid = name !== '' && email !== '' && pass !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // Assuming you might want to handle registration logic here
            // e.g., send data to backend and handle response
            console.log('Registering:', { name, email, pass });
            navigate('/registered');
        }
    };

    return (
        <div className="Appokform"> {/* Updated class name to match login */}
            <div className="Appcardform"> {/* Updated class name to match login */}
                <div>
                    <img 
                        src="/img/alogo.png" 
                        alt="Profile" 
                        className="profile-image"
                    />
                </div>
                <h2 style={{ fontSize: '2em' }}>Register</h2>
                <form className="auth-form-container" onSubmit={handleSubmit}>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        placeholder="Full Name" 
                        id="name" 
                        name="name" 
                    />
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
                    <button className="buttonform" type="submit" disabled={!isFormValid}>Register</button>
                </form>
                <button className="link-btn" onClick={() => navigate('/login')}>
                    Already have an account? Login here.
                </button>
            </div>
        </div>
    )
}
