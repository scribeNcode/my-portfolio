import React from 'react';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Works from './Pages/Works'
import Contact from './Pages/Contact'

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
