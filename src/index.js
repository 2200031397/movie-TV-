// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Signup from './signup.js';
import Home from './home.js';
import TopRated from './toprated.js'; // Capitalized component name
import Action from './action.js';
import Drama from './drama.js';
import TV from './TV';
import Admin from './admin.js';
import Users from './users.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/toprated" element={<TopRated />} /> {/* Capitalized component name */}
        <Route path="/genres/action" element={<Action/>}/>
        <Route path='/genres/drama' element={<Drama/>}/>
        <Route path='/TV' element={<TV/>}/>
        <Route path='/TV' element={<TV/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/detail/admin' element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Website />, document.getElementById('root'));
