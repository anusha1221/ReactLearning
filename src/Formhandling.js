import React, { useState } from 'react';
function Fromhandling() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    // State to manage form validation errors
    const [errors, setErrors] = useState({
        email: '', // Error message for email field
        username: '', // Error message for username field
        password: '' // Error message for password field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validation
        let error = '';
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            error = emailRegex.test(value) ? '' : 'Invalid email format';
        } else if (name === 'username') {
            error = value.length >= 3 ? '' : 'Username must be at least 3 characters';
        } else if (name === 'password') {
            error = value.length >= 6 ? '' : 'Password must be at least 6 characters';
        }
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let alertMessage = '';

        if (!formData.email) {
            alertMessage += 'Please enter email.\n';
        }
        if (!formData.username) {
            alertMessage += 'Please enter username.\n';
        }
        if (!formData.password) {
            alertMessage += 'Please enter password.\n';
        }

        if (alertMessage) {
            alert(alertMessage);
        } else if (!errors.email && !errors.username && !errors.password) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fix the errors before submitting.');
        }
    };

    const handleCancel = () => {
        setFormData({ email: '', username: '', password: '' });
        setErrors({ email: '', username: '', password: '' });
    };

    return (
        <div className=" border container mt-5 w-50 p-3 m-auto">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default Fromhandling;