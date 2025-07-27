import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css";
import API from '../Api/Api'; // your custom axios instance

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/login', { email, password });

      // Optional: if backend sends a message or token
      // localStorage.setItem("token", res.data.token);

      navigate('/admin/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      setError(msg);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} >
        <h2>Admin Login</h2>

        {error && <p>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input'
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         className='input'
          required
        />

        <button type="submit" className='submit-btn' >Login</button>
      </form>
    </div>
  );
};



export default AdminLogin;
