import './App.css';

import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Decoration from './pages/Decoration'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/decoration" element={<Decoration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
