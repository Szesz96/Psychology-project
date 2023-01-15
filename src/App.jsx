import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/main/main'
import Blog from './views/blog/blog'
import FindPsychologist from './views/find/findPsychologist'
import ErrorSite from './views/error/errorSite'
import Help from './views/help/help';
import Relax from './views/relax/relax'
import React from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='findpsychologist' element={<FindPsychologist />}/>
        <Route path='help' element={<Help />}/>
        <Route path='relax' element={<Relax />}/>
        <Route path='*' element={<ErrorSite />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
