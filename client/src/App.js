import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import  Home  from './pages/Home/index';
import  Login  from './pages/Login/Login';
import  Register  from './pages/Register/Register';
import CreatePosts from './components/CreatePosts/CreatePosts';
import UserAccount from './pages/UserAccount/index';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comment'
import './App.css';
import axios from 'axios'
import Articles from './components/Articles';

function App() {
  

  
  return (
    <>
    <Router>
    <div id="wrapper">
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/UserAccount" element={<UserAccount/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/CreatePosts" element={<CreatePosts/>} />
       <Route path="/Posts" element={<Posts/>} />
       <Route path="/post/:_id/comment" element={<Comments/>} />

       <Route path="*" element={<Navigate replace to="/"/>} />
       
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;


