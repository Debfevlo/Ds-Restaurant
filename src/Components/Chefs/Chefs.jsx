import React from 'react'
import chef1 from "../../assets/images/chef1.png";
import chef2 from "../../assets/images/chef2.png";
import {motion} from "framer-motion";
import {SlideUp} from "../Landing/Landing";


const ChefData = [
    {
        id: 1,
        img: chef1,
        name: "John Williams",
        
    },
    {
        id: 2,
        img: chef2,
        name: "Debbie Antonio",
    
    },
    {
        id: 3,
        img: chef2,
        name: "Dorothy Fevlo",
    },
    {
        id: 4,
        img: chef1,
        name: "Jules Charles",

    },
]

const Chefs = () => {
    return (
        <section>
            <div className="container min-h-[400px]">
            <h3 
            className='text-3xl font-bold text-center sm:text-left sm:mt-12'>Meet Our Chefs</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center'>
                {
                    ChefData.map((data) => {
                        return (
                            <motion.div 
                            variants={SlideUp(1)}
                            initial="initial"
                            whileInView="animate"
                            key={data.id} className='rounded-md text-center mt-6'> 
                                <img 
                                    src={data.img} 
                                    alt={data.name} 
                                    className='w-32 sm:w-40 md:w-48 lg:w-56 max-w-full rounded-full bg-[#D1D1D1]' 
                                />
                                <h3 className='mt-2 text-lg font-leagueGothic'>{data.name}</h3>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
        </section>
        
    )
}

export default Chefs;
