import React, { useState } from "react"; // Importing React and useState hook to manage component state.
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom for navigation between routes.

export const Register = (props) => {
    const [email, setEmail] = useState(''); // State for storing the email input value.
    const [pass, setPass] = useState(''); // State for storing the password input value.
    const [name, setName] = useState(''); // State for storing the full name input value.

    const navigate = useNavigate(); // Hook to allow programmatic navigation.
    const isFormValid = name !== '' && email !== '' && pass !== ''; // Boolean to check if all form fields are not empty.

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload).
        if (isFormValid) {
            // Here you could add registration logic, such as sending data to a backend.
            console.log('Registering:', { name, email, pass }); // Example log for debugging purposes.
            navigate('/registered'); // Navigate to the "/registered" route upon successful registration.
        }
    };

    return (
        <div className="Appokform"> {/* Wrapper for the form container, applies styling from a CSS class */}
            <div className="Appcardform"> {/* Card-like container for the registration form */}
                <div>
                    <img 
                        src="/img/alogo.png" 
                        alt="Profile" 
                        className="profile-image" // Display a profile image for the registration form.
                    />
                </div>
                <h2 style={{ fontSize: '2em' }}>Register</h2> {/* Header for the form with inline font size styling */}
                <form className="auth-form-container" onSubmit={handleSubmit}> {/* Form container with submit handler */}
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} // Update the name state on input change.
                        type="text" 
                        placeholder="Full Name" 
                        id="name" 
                        name="name" 
                    />
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
                    <button className="buttonform" type="submit" disabled={!isFormValid}> {/* Disable button if form is not valid */}
                        Register
                    </button>
                </form>
                <button className="link-btn" onClick={() => navigate('/login')}> {/* Button to navigate to the login page */}
                    Already have an account? Login here.
                </button>
            </div>
        </div>
    );
}
