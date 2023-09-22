//import logo from './logo.svg';
//import './App.css';
import Form from './pages/Register';
import Forms from './pages/Login';
import Navbarr from './pages/Navbar';
import Home from './pages/Homepage';
import Dashboard from './pages/Dashboard'
// import Users from './pages/Users'
// import Settings from './pages/Settings'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/pages/Login" element={<Forms/>} />
        <Route exact path="/pages/Navbar" element={<Navbarr/>} />
        <Route exact path="/pages/Register" element={<Form/>} />
        <Route exact path='/pages/Dashboard'element={<Dashboard/>} />
        {/* <Route exact path='/Users' element={<Users/>}/>
        <Route exact path='/Settings' element={<Settings/>}/> */}
 
        
        </Routes>
     
    </div>
  );
}

export default App;
