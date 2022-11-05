
import './App.css';
import React from "react";
import  Home  from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import { Signup } from './components/Signup';
import {Account} from './components/Account';
import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  HashRouter,
  Route,
  
} from "react-router-dom";
import Products from './homepage/Products';


function App() {
  const [customer,setcustomer]=useState({})
 

  return (
    <>

    <Router>
    <HashRouter>
   
    <Navbar/>
 
      <Routes>
       
          <Route   path="/" element={<Home/>}/>
            
          <Route   path="/Signup" element={<Signup/>}/>
            
          <Route   path="/Login" element={<Login setcustomer={setcustomer}  />}/>

          <Route   path="/Products" element={<Products/>}/>

          <Route   path="/Account" element={<Account customer={customer} />}/>
        </Routes>
        </HashRouter>
        </Router>
    </>
  );
}

export default App;
