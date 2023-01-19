import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/main/main'
import Blog from './views/blog/blog'
import FindPsychologist from './views/find/findPsychologist'
import ErrorSite from './views/error/errorSite'
import Help from './views/help/help';
import Relax from './views/relax/relax'
import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Post from './views/post/post';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='blog' element={<Blog setIsAuth={setIsAuth} />} />
        <Route path='findpsychologist' element={<FindPsychologist />}/>
        <Route path='help' element={<Help />}/>
        <Route path='relax' element={<Relax />}/>
        <Route path='post' element={<Post />}/>
        <Route path='*' element={<ErrorSite />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
