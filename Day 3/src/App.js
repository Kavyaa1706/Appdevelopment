//import logo from './logo.svg';
//import './App.css';
import Form from './pages/Register';
import Forms from './pages/Login';
import Navbarr from './pages/Navbar';
import Home from './pages/Homepage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/pages/Login" element={<Forms/>} />
        <Route exact path="/pages/Navbar" element={<Navbarr/>} />
        <Route exact path="/pages/Register" element={<Form/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
