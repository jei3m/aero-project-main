import React, { useState } from "react"; // Importing React and the useState hook for managing component state.
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom for navigation.
import './Forms.css'; // Importing custom CSS for styling the form.

export const Login = (props) => {
    const [email, setEmail] = useState(''); // State for storing the email input value.
    const [pass, setPass] = useState(''); // State for storing the password input value.

    const navigate = useNavigate(); // Hook to allow programmatic navigation between routes.
    const isFormValid = email !== '' && pass !== ''; // Boolean to check if both email and password fields are not empty.

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload).
        if (isFormValid) {
            navigate('/select'); // Navigate to the "/select" route if the form is valid.
        }
    };

    return (
        <div className="Appokform"> {/* Wrapper for the form container, applying styles from Forms.css */}
            <div className="Appcardform"> {/* Card-like container for the login form */}
                <div>
                    <img 
                        src="/img/alogo.png" 
                        alt="Login Illustration" 
                        className="profile-image" // Profile image for the login form.
                    />
                </div>
                <h2 style={{ fontSize: '2em' }}>Login</h2> {/* Header for the form with inline styling for font size */}
                <form className="auth-form-container" onSubmit={handleSubmit}> {/* Form container with submit handler */}
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} // Update the email state on input change.
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        name="email" 
                    />
                    <input 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)} // Update the password state on input change.
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        name="password" 
                    />
                    <button 
                        className={`buttonform ${isFormValid ? 'active' : 'inactive'}`} // Apply conditional class based on form validity.
                        type="submit" 
                        disabled={!isFormValid} // Disable the button if the form is not valid.
                    >
                        Log In
                    </button>
                </form>
                <button className="link-btn" onClick={() => navigate('/register')}> {/* Button for navigating to the registration page */}
                    Don't have an account? Register here.
                </button>
            </div>
        </div>
    );
}
