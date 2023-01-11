import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Blog from './views/Blog'
import FindPsychologist from './views/FindPsychologist'
import ErrorSite from './views/ErrorSite'
import Help from './views/Help';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='blog' element={<Blog />}/>
      <Route path='findpsychologist' element={<FindPsychologist />}/>
      <Route path='help' element={<Help />}/>
      <Route path='*' element={<ErrorSite />}/>
    </Routes>
  );
}

export default App;
