import React, { useState } from 'react'
import Register from '../Services/RegistrationService';

const initialFormData = {
  email: '',
  mobile: '',
  password: '',
};
const Login = () => {
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
      const userData = await Register.handleLogin(
        formData.email || formData.mobile,
        formData.password,
      );

      setFormData(initialFormData);
      console.log('User Logged in successfully', userData);
    } catch (error) {
      console.error('Error during registration', error);
      if (error.error === 'Invalid credentials') {
        alert('Invalid credentials. Please check your email/mobile and password.');
      } else {
        alert('An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email/Mobile:
          <input
            type={formData.email ? 'email' : 'number'}
            name={formData.email ? 'email' : 'mobile'}
            placeholder='Enter the email or mobile'
            value={formData.email || formData.mobile}
            autoComplete='on'
            onChange={handleChange}
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login