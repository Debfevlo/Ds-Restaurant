import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Landing from './Components/Landing/Landing'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-[#FFFCF7]'>
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default App