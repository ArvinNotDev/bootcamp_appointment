import { useState } from 'react';
import './newUser.css';

function NewUser() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
        birth_data: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.first_name) newErrors.first_name = 'نام ضروریه';
        if (!formData.last_name) newErrors.last_name = 'نام خانوادگی ضروریه';
        if (!formData.username) newErrors.username = 'نام کاربری ضروریه';
        if (!formData.email) newErrors.email = 'ایمیل ضروریه';
        if (!formData.phone_number) newErrors.phone_number = 'شماره موبایل ضروریه';
        if (!formData.birth_data) newErrors.birth_data = 'تاریخ تولد ضروریه';
        if (!formData.password) newErrors.password = 'رمز عبور ضروریه';
        // Add more validations if needed

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:8000/api/accounts/user/', { // Change URL to your backend endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                
                const data = await response.json();

                if (response.ok) {
                    alert('Account created successfully!');
                    // Redirect or clear form as needed
                } else {
                    setErrors(data.errors || { general: 'An error occurred. Please try again.' });
                }
            } catch (error) {
                console.error('Error:', error);
                setErrors({ general: 'An error occurred. Please try again.' });
            }
        }
    };

    return (
        <div id="newUser-container">
            <div className="form-wrapper">
                <h2>Create New Account</h2>
                <form onSubmit={handleSubmit}>
                    {errors.general && <p className="error">{errors.general}</p>}
                    <div className="input-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p className="error">{errors.first_name}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p className="error">{errors.last_name}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                            type="tel"
                            id="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                        />
                        {errors.phone_number && <p className="error">{errors.phone_number}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="birth_data">Birth Date</label>
                        <input
                            type="date"
                            id="birth_data"
                            value={formData.birth_data}
                            onChange={handleChange}
                        />
                        {errors.birth_data && <p className="error">{errors.birth_data}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default NewUser;
