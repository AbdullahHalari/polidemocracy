import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import Footer from './component/footer';
import Topics from './pages/topics';
import Blogs from './pages/blogs';
import News from './pages/news';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
