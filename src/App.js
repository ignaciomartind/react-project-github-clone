import './App.css';

import Login from './pages/Login.js'
import Home from './pages/Home.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
