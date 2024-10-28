import React from 'react';
import { GoSearch } from "react-icons/go";
import food from '../../assets/images/food2-plate.png';
import { PiBowlFood } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { GiCakeSlice } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import  {motion} from 'framer-motion';

const SlideUp = (delay) =>{
    return{
        initial:{
            y:"100%",
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


const Landing = () => {
  return (
    <main>
        <div className='container flex min-h-[600px] justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center justify-between mt-14 md:mt-0'>
            {/* text section here  */}
            <div className='space-y-6 text-center md:text-left'>
                <motion.h1 
                variants={SlideUp(0.5)}
                initial="initial"
                whileInView="animate"
                className='text-3xl font-bold '>We Serve The Taste You Love 😍</motion.h1>
                <motion.p 
                variants={SlideUp(1)}
                initial="initial"
                whileInView="animate"
                className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo velit quis repudiandae atque aspernatur, iusto rem deleniti, quisquam voluptatum ut veritatis nemo neque voluptate saepe placeat. Ad, veritatis qui.
                </motion.p>
                <motion.div 
                variants={SlideUp(1.5)}
                initial="initial"
                whileInView="animate"
                className='flex gap-4 justify-center itmes-center sm:justify-center sm:items-center md:justify-start md:items-start'>
                    <button className='btn-primary '>Explore Menu</button>
                <button className='btn-secondary flex items-center justify-center gap-3'>
                    <GoSearch /> 
                    Search
                </button>
                </motion.div>
            </div>
            {/* image section */}
            <div>
                <motion.img 
                initial={{opacity:0, rotate:20, x:200, y:100,}}
                whileInView={{opacity:1, rotate:0, x:0, y:0 }}
                transition={{duration:0.8}}
                src={food} alt="A plate of food" className='w-[450px] img-shadow relative' />
                <motion.div 
                variants={SlideUp(2)}
                initial="initial"
                whileInView="animate"
                className=" hidden sm:block sm:absolute mt-[-200px] ml-[220px] space-y-3    sm:mt-[-350px] sm:ml-[400px] sm:space-y-6">
                    <div className='flex items-center sm:gap-3  bg-white rounded-full sm:w-24 sm:p-2 justify-center shadow-md'>
                        <PiBowlFood className='text-red-700 '/>
                        <p>Dishes</p>
                    </div>
                    <div className='flex items-center sm:gap-3  bg-white rounded-full sm:w-24 sm:p-2 justify-center shadow-md'>
                        <BiDrink className='text-blue-700'/>
                        <p>Drinks</p>
                    </div>
                    <div className='flex items-center sm:gap-3  bg-white rounded-full sm:w-24 sm:p-2 justify-center shadow-md'>
                        <GiCakeSlice className='text-pink-700'/>
                        <p>Cakes</p>
                    </div>
                    <div className='flex items-center sm:gap-3  bg-white rounded-full sm:w-24 sm:p-2 justify-center shadow-md'>
                        <IoFastFood className='text-yellow-700'/>
                        <p>snacks</p>
                    </div>
                    <div className='flex items-center sm:gap-3  bg-white rounded-full sm:w-24 sm:p-2 justify-center shadow-md'>
                        <FaBowlFood className='text-brown2' />
                        <p>Platter</p>
                    </div>
                </motion.div>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Landing