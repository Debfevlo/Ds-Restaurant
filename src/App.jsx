import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Landing from './Components/Landing/Landing';
import Dishes from "./Components/Popular-Dishes/Dishes";
import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonials from "./Components/Testimonials/Testimonials"
import Chefs from "./Components/Chefs/Chefs"
const App = () => {
  return (
    <div className='overflow-x-hidden bg-[#FFFCF7]'>
      <Navbar/>
      <Landing/>
      <Dishes/>
      <AboutUs/>
      <Testimonials/>
      <Chefs/>
    </div>
  )
}

export default App