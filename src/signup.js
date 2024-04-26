// Signup.js

import React from 'react';
import './signup.css';
import axios from 'axios';

function Signup() {

  function signuppage() {
   
    let username=document.getElementById("username").value;
    let password1=document.getElementById("password").value;
    let password2=document.getElementById("confirmPassword").value;
    console.log("i am in signup");
    if(password1===password2){
      let password=password1
      
    axios.post('http://localhost:8081/signup', { username, password })
      .then(response => {
        // Handle successful signup response
        window.location.replace("/");
        alert(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error signing up:', error);
      });

    }
    else {
      alert('Passwords do not match');
    }
  }

  return (

  <div>
      <div className="con">
    
    <div className="signup-container">
      <h2>Sign Up</h2>
      
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
        </div>

        <button onClick={signuppage} className="btn btn-primary">Sign Up</button>
      
    </div>
    </div>
  
    </div>
  );
}

export default Signup;
