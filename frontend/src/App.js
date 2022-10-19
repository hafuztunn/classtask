
import './App.css';
import React from "react";
import  Home  from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import { Signup } from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <>

    <Router>
   
    <Navbar/>
 
      <Routes>
       backgroundColor:white;
          <Route   path="/" element={<Home/>}/>
            
          <Route   path="/Signup" element={<Signup/>}/>
            
          <Route   path="/Login" element={<Login/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
