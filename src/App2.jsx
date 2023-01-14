import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Blog from './views/Blog'
import FindPsychologist from './views/FindPsychologist'
import ErrorSite from './views/ErrorSite'
import Help from './views/Help';
import React from 'react';
import Relax from './views/relax'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='blog' element={<Blog />}/>
      <Route path='findpsychologist' element={<FindPsychologist />}/>
      <Route path='help' element={<Help />}/>
      <Route path='relax' element={<Relax />}/>
    </Routes>
  );
}

export default App;
