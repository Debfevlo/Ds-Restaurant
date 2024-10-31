import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Landing from './Components/Landing/Landing';
import Dishes from "./Components/Popular-Dishes/Dishes";
import AboutUs from "./Components/AboutUs/AboutUs";

const App = () => {
  return (
    <div className='overflow-x-hidden bg-[#FFFCF7]'>
      <Navbar/>
      <Landing/>
      <Dishes/>
      <AboutUs/>
    </div>
  )
}

export default App