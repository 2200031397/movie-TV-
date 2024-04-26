import React, { useState } from 'react';
import './admin.css'; // Import the CSS file for styling
import axios from 'axios';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Here you would typically send a request to your backend with the username and password
    // For this example, let's just log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);
    axios.post('http://localhost:8081/login', { username, password })
    .then(response => {
      // Handle successful login response
      alert(response.data);
      window.location.replace("/detail/admin");
    })
    .catch(error => {
      // Handle error
      alert('Error')
    });
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Admin Login</h2>
      <div className="input-group">
        <label className="input-label">Username:</label>
        <input className="input-field" type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="input-group">
        <label className="input-label">Password:</label>
        <input className="input-field" type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Admin;
