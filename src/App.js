// App.js

import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  
  function handleLogin(event) {
    event.preventDefault();
    let username =document.getElementById("username").value;
    let password=document.getElementById("password").value;
    
    axios.post('http://localhost:8081/login', { username, password })
      .then(response => {
        // Handle successful login response
        alert(response.data);
        window.location.replace("/home");
      })
      .catch(error => {
        // Handle error
        alert('Error')
      });
  }
  
  
  function signuppage(){
    window.location.replace("Signup");
  }
  return (
    <div>
      <div className='uppercase'>
        <div>
        <h1 className='stream-sphere m-2'>StreamSphere</h1>
        </div>
        <div className='d-flex flex-row justify-content-end'>
          <button className='buttonsigninsignup'>Signin</button>
          <button className='buttonsigninsignup' onClick={signuppage}>Signup</button>
         </div>
      </div>

      <div className="app">
          <div className="movie-info container-fluied">
            <div className='row'>
              <div className='col-8 text-center mt-5'>
            <h2>Welcome to StreamSphere</h2>
            <p>
Discover a new dimension of entertainment with StreamSphere, your ultimate destination for immersive and diverse streaming experiences. At StreamSphere, we redefine the way you consume content, offering a curated selection of movies, TV shows, documentaries, and exclusive originals.

Why StreamSphere?

<br/>

Limitless Variety: Dive into an expansive library of content spanning genres, cultures, and languages. From trending blockbusters to hidden gems, there's something for everyone.

Immersive Quality: Experience high-quality streaming with crisp visuals and crystal-clear audio. Our platform is designed to deliver an immersive viewing experience that brings every story to life.

Personalized Recommendations: Let StreamSphere understand your preferences and tailor recommendations just for you. Discover new favorites based on your viewing history and preferences.

Anywhere, Anytime: Enjoy the freedom to stream your favorite content anytime, anywhere. Whether you're at home, on the go, or traveling, StreamSphere is your go-to companion for entertainment.

Exclusive Originals: Immerse yourself in our exclusive lineup of original content crafted by talented creators. Explore unique stories and perspectives that you won't find anywhere else.

Join the StreamSphere Community

<br/>

Become a part of a vibrant community of entertainment enthusiasts. Share your thoughts, discover hidden gems, and connect with like-minded viewers. StreamSphere is not just a platform; it's a community that celebrates the love for great storytelling.

Embark on a streaming journey like never before. Join StreamSphere and redefine your entertainment experience today!


            </p>
          </div>
          <div className='col-4 d-flex flex-column justify-content-center '>
          <div className="login-container ml-6">
            <div className="login-form">
              
              <h1>Login</h1>
              <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <br/>  
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                  <br/>
                  <br/>
                <button className='buttonsignin' type="submit">Sign In</button>
                <br/>
                <br/>
                <p>if your are admin <a href='/admin'>click</a></p>
              </form>
              </div>
              </div>
          </div>
        </div>
        </div>
        </div>
        </div>

  );
}

export default App;
