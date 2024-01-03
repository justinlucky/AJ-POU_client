import React, { useState } from 'react';
import Register from '../Services/RegistrationService';

const initialFormData = {
    username: '',
    email: '',
    mobile: '',
    password: '',
}

const SignUp = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await Register.handleSignUp(
                formData.username,
                formData.email,
                formData.mobile,
                formData.password
            );

            setFormData(initialFormData);
            console.log('User signed up', userData);
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete='on'
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete='on'
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        autoComplete='on'
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete='on'
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
