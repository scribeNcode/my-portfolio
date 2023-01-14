import React from 'react';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Works from './Components/Pages/Works'
import Contact from './Components/Pages/Contact'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/works' element={<Works/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
    </div>
  );
}

export default App;
