import React from 'react';
import Phone from "../../assets/images/phone.png";
import {motion} from "framer-motion";
import {SlideUp} from "../Landing/Landing"


const Playstore = () => {
  return (
    <main>
      <div className='container flex min-h-[400px] mt-10 justify-center items-center bg-[#FFF8EF]'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center justify-between mt-14 md:mt-0'>
          {/* Text section */}
          <motion.div 
          variants={SlideUp(0)}
          initial="initial"
          whileInView="animate"
          className='space-y-6 text-center md:text-left'>
            <h1 
            className='text-3xl font-leagueGothic'> Never Feel Hungry! Download Our Mobile App. Enjoy Delicious Food 😍</h1>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo velit quis repudiandae atque aspernatur, iusto rem deleniti, quisquam voluptatum ut veritatis nemo neque voluptate saepe placeat. Ad, veritatis qui.
            </p>
            <div className='hidden md:block'>
              <button className='btn-primary'>Download Now</button>
            </div>
          </motion.div>
          {/* Image section */}
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
            transition={{
              duration:0.6,
              delay:0.5,
              
            }}

          >
            <img src={Phone} alt="A plate of food" className='w-[600px] img-shadow relative' />
          </motion.div>
          <div 
              className='block md:hidden mb-8'>
              <button className='btn-primary'>Download Now</button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Playstore;
