import React, { useState } from 'react';
import Logo from "../../assets/images/logo.png";
import { GoGift } from "react-icons/go";
import {motion} from 'framer-motion';
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu"

export const NavMenu =[
    {
        id:1,
        name:"Home",
        path:"/",
        delay:0.1,
    },

    {
        id:2,
        name:"About Us",
        path:"/#about",
        delay:0.2,
    },

    {
        id:3,
        name:"Menu",
        path:"/#menu",
        delay:0.3,
    },

    {
        id:4,
        name:"Service",
        path:"/#service",
        delay:0.4,
    },

     {
        id:5,
        name:"Blog",
        path:"/#blog",
        delay:0.5,
    },

     {
        id:6,
        name:"Contact Us",
        path:"/#contact",
        delay:0.6,
    },
]

const SlideDown = (delay) =>{
    return{
        initial:{
            y:"-100%",
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                delay:delay,
            },
        },
    };
};

const Navbar = () => {
const [open, setOpen] = useState(false)
  return (
    <>
<nav>
        <div className="container flex justify-between items-center">
            {/* Logo section */}
                <motion.img 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.8, delay:0.5}}
                src={Logo} alt="Company's logo" className='md:w-20 w-20 sm:w-16' />
            
            {/* menu section */}
            <div className='hidden md:block sm:block'>
                <ul className='flex gap-6' >
                    {
                        NavMenu.map((menu)=>{
                            return(
                                <div className="">
                                    <motion.li 
                                    variants={SlideDown(menu.delay)}
                                    initial="initial"
                                    animate="animate"
                                    key={menu.id}>
                                    <a href={menu.path} className='inline-block text-2xl font-leagueGothic hover:scale-105 hover:text-brown2  md:text-2xl sm:text-sm'>{menu.name}</a>
                                    </motion.li>
                                </div>
                                
                            )
                        })
                    }
                </ul>
            </div>

            {/*button section */}
            <div className='hidden md:block sm:block'>
                <motion.div 
                variants={SlideDown(1)}
                initial="initial"
                animate="animate"
                className='flex justify-center items-center gap-8 '>
                <div className='sm:hidden md:block'>
                    <div className="w-8 h-8 border-2 rounded-full border-secondary flex justify-center items-center hover:scale-105"><GoGift/></div>
                </div>

                
                <button className='btn-primary'>Reserve Table</button>
                
            </motion.div>
            </div>
            
            {/* mobile hamburger menu section */}
            
            <div className='sm:hidden' onClick={() => setOpen(!open)}>
                <IoMdMenu className='text-4xl'/>
            </div>
        </div>
    </nav>

    {/* Mobile sidebar section */}
    <ResponsiveMenu open={open}/>
    </>
    
  )
}

export default Navbar