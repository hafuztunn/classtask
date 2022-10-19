import React from 'react'
import Announcements from '../homepage/Announcement';
import Categories from "../homepage/Categeory";
import Footer from "../homepage/Footer";
import Navbar from "./Navbar";
import Newsletter from '../homepage/header';
import Products from "../homepage/Products";
import Slider from "../homepage/Slider";
const Home = () => {
  return (
    <div>
      <Announcements />
     
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    
    </div>
  );
};

export default Home;
