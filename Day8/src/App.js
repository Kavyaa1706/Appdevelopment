//import logo from './logo.svg';
//import './App.css';
import Form from './pages/Register';
import Forms from './pages/Login';
import Navbarr from './pages/Navbar';
import Home from './pages/Homepage';
import Dashboard from './pages/Dashboard'
// import Users from './pages/Users'
import Services from './pages/Services'
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Aboutus from './pages/Aboutus';
import Privacypolicy from './pages/Privacypolicy';
import TermsandConditions from './pages/Termsandconditions';
import Popup from './pages/Popup';


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
       {/* <Route exact path='/Users' element={<Users/>}/> */}
        <Route exact path='/Services' element={<Services/>}/> 
        <Route exact path='/pages/Footer' element={<Footer/>}/> 
        <Route exact path='/pages/Privacypolicy' element={<Privacypolicy/>}/> 
        <Route exact path='/pages/TermsandConditions' element={<TermsandConditions/>}/> 
        <Route exact path='/pages/Aboutus' element={<Aboutus/>}/> 
        <Route exact path='/pages/Faqs' element={<Faqs/>}/> 
        <Route exact path='/pages/Popup' element={<Popup/>}/> 
 
        
        </Routes>
     
    </div>
  );
}

export default App;
