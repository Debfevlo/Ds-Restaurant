import React from 'react';
import BackgroundImg from '../../assets/images/background.png';
import { FaReceipt } from "react-icons/fa6";
import { GiCook } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import {motion} from "framer-motion";
import {SlideUp} from "../Landing/Landing";

const AboutUs = () => {
  return (
    <div className="container min-h-[500px] ">
        <h3 className='text-3xl font-bold text-center sm:text-left sm:mt-16'>About Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16  sm:m-14 place-items-center">
            {/*images section */}
            <motion.div
            initial={{
              opacity:0,
              x:-100,
              y:100,
            }}
            whileInView={{
              opacity:1,
              x:0,
              y:0
            }}
            whileHover={{
              scale:1.2,
              rotate:15,
              x:50,
              y:-50
            }}
            transition={{
              duration:0.6,
              delay:0.5,
              scale:{duration:0.5}
            }}
            >
                <img src={BackgroundImg} alt="backgroung image of food" className='w-[400px] md:w-[450px] mt-10 sm:mt-0'/>
            </motion.div>
            
            

            {/* text section */}
            <div className='space-y-4'>
              <motion.h3 
              variants={SlideUp(1)}
              initial="initial"
              whileInView="animate"
              className='text-3xl  text-center font-leagueGothic'>We Are More Than Multiple Service</motion.h3>
              <motion.p 
              variants={SlideUp(1.3)}
              initial="initial"
              whileInView="animate"
              className='text-sm md:text-base text-center'>This is a type of Restaurant which serves Food and Drinks, in addition to light refreshments such as backed goods or snack. The term comes from the french word meaning food.</motion.p>
              <motion.div 
              variants={SlideUp(1.6)}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-2 gap-3 place-items-center">
                <div className='flex gap-3  items-center'>
                  <div className="bg-white rounded-full border-2 border-dotted px-2 py-2 text-center"><FaReceipt className='text-blue-700'/></div>
                  <p className='text-brown2'>Online Order</p>
                </div>
                
                <div className='flex gap-3  items-center'>
                  <div className="bg-white rounded-full border-2 border-dotted px-2 py-2 text-center"><GiCook className='text-pink-700'/></div>
                  <p className='text-brown2'>24/7 Service</p>
                </div>  

                <div className='flex gap-3  items-center'>
                  <div className="bg-white rounded-full border-2 border-dotted px-2 py-2 text-center"><FaKitchenSet className='text-green-700'/></div>
                  <p className='text-brown2'>Clean Kitchen</p>
                </div>

                <div className='flex gap-4 items-center'>
                  <div className="bg-white rounded-full border-2 border-dotted px-2 py-2 text-center"><FaBookOpen className='text-yellow-700'/></div>
                  <p className='text-brown2'>Reservation</p>
                </div> 

                <div className='flex gap-3  items-center'>
                  <div className="bg-white rounded-full border-2 border-dotted px-2 py-2 text-center"><FaBroom  className='text-orange-700'/></div>
                  <p className='text-brown2'>Clean Kitchen</p>
                </div>   

                 <div className='flex gap-3  items-center'>
                  <div className="bg-white rounded-full border-2 border-dotted px-2 py-2 text-center"><SiCodechef  className='text-purple-700'/></div>
                  <p className='text-brown2'>Clean Kitchen</p>
                </div>       
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs