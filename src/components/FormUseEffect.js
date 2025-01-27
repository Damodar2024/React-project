import React, { useState } from 'react';

const FormUseEffect = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateFields = (field, value) => {
        const validateErrors = { ...errors };

        if (field === 'username') {
            if (value.trim() === '') {
                validateErrors.username = "Username is required.";
            } else {
                delete validateErrors.username;
            }
        }

        if (field === 'email') {
            if (value.trim() === '') {
                validateErrors.email = "Email is required.";
            } else {
                delete validateErrors.email;
            }
        }

        if (field === 'password') {
            if (value.length === 0) {
                validateErrors.password = "Password is required.";
            } else {
                delete validateErrors.password;
                if (value.length < 15) {
                    validateErrors.password = "Password must be at least 15 characters long.";
                }
                if (!/\d/.test(value)) {
                    validateErrors.password = validateErrors.password
                        ? validateErrors.password + " Password must contain at least one number."
                        : "Password must contain at least one number.";
                }
            }
        }

        setErrors(validateErrors);
    };

    const handleChange = (field, value) => {
        if (field === 'username') setUsername(value);
        if (field === 'email') setEmail(value);
        if (field === 'password') setPassword(value);

        validateFields(field, value); // Validate dynamically as user types
    };

    const submitForm = () => {
        if (Object.keys(errors).length === 0 && username && email && password) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fix the errors before submitting.");
        }
    };

    return (
        <div>
            <form className='container my-5 border border-secondary p-4 rounded shadow'>
                <div className='mb-3'>
                    <label htmlFor='exampleusername' className='form-label'>UserName</label>
                    <input
                        type='text'
                        className='form-control'
                        value={username}
                        onChange={(e) => handleChange('username', e.target.value)}
                    />
                    {errors.username && <p className='text-danger fs-6'>{errors.username}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {errors.email && <p className='text-danger fs-6'>{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    {errors.password && <p className='text-danger fs-6'>{errors.password}</p>}
                </div>
                <button type="button" className="btn btn-primary" onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
};

export default FormUseEffect;
