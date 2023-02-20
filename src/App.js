import React from 'react';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Works from './Pages/Works'
import Contact from './Pages/Contact'
import About from './Pages/About'


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/works' element={<Works/>} />
      <Route path='/contact' element={<Contact/>} />
     
     </Routes>
    </div>
  );
}

export default App;
