import React from 'react'
import Logo from "../../assets/images/logo.png";
import {motion} from "framer-motion"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <span id="contact"></span>
    <motion.footer 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className='bg-primary rounded-t-3xl'
    >
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3">
            {/*brand info */}
                <div className='space-y-3 lg:max-w-[300px]'>
                    <img src={Logo} alt="compaany's logo" className='w-24'/>
                    <p>This is a type of Restaurant which serves Food and Drinks, in addition to light refreshments such as backed goods or snack. The term comes</p>
                    <div className='flex text-3xl gap-3'>
                        <FaInstagram className='hover:text-white'/>
                        <FaTiktok className='hover:text-white'/>
                        <FaSquareTwitter className='hover:text-white' />
                        <FaFacebook className='hover:text-white'/>
                    </div>
                </div>
            {/* links */}
            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <div>
                    <h1 className='text-xl font-semibold'>Services</h1>
                    <ul className='space-y-3 mt-8'>
                        <li className='Footer-link'>Delivery</li>
                        <li className='Footer-link'>Reservation</li>
                        <li className='Footer-link'>Take-away</li>
                        <li className='Footer-link'>Special Events</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-xl font-semibold'>Quick Links</h1>
                    <ul className='space-y-3 mt-8'>
                        <li className='Footer-link'>Home</li>
                        <li className='Footer-link'>About Us</li>
                        <li className='Footer-link'>Services</li>
                        <li className='Footer-link'>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-xl font-semibold'>Maps</h1>
                    <ul className='space-y-3 mt-8'>
                        <li className='Footer-link'>Regions</li>
                        <li className='Footer-link'>Municipal</li>
                        <li className='Footer-link'>Cities</li>
                        <li className='Footer-link'>Town</li>
                    </ul>
                </div>
            </div>
            
        </div>
            
        </div>
    </motion.footer>
    </>

  )
}

export default Footer