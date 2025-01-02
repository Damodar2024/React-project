import React, { useEffect, useState } from 'react';
const FormUseEffect = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const validateErrors = {};
        if (username.trim() === '') {
            validateErrors.username = "Username is required.";
        }
        if (email.trim() === '') {
            validateErrors.email = "Email is required.";
        } 
        else if (password.length > 0 && !/\d/.test(password)) {
            validateErrors.password = "Password must contain at least one number.";
        }
        if (password.length > 0 && password.length < 15) {
            validateErrors.password = validateErrors.password
                ? validateErrors.password + " Must be at least 15 characters long."
                : "Password must be at least 15 characters long.";
        }

        setErrors(validateErrors);
    }, [username, email, password]);

    const submitForm = () => {
        if (Object.keys(errors).length === 0 && username && email && password) {
            alert("Form submitted successfully!");
        } 
    };

    return (
        <div>
 
  <form className='container my-5 border border-secondary p-4 rounded shadow'>
  <div className='mb-3'>
    <label htmlFor='exampleusername' className='form-label'>UserName</label>
    <input type='text' className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    {errors.username && <p className='text-danger fs-6'>{errors.username}</p>}
  </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      {errors.email && <p className='text-danger fs-6'>{errors.email}</p>}
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      {errors.password && <p className='text-danger fs-6'>{errors.pass}</p>}
    </div>
    <button type="button" className="btn btn-primary" onClick={submitForm}>Submit</button>
  </form>
</div>

    );
};

export default FormUseEffect;
