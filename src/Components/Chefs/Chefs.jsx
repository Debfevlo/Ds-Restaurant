import React from 'react'
import chef1 from "../../assets/images/chef1.png";
import chef2 from "../../assets/images/chef2.png";
import chef3 from "../../assets/images/chef3.png";
import chef4 from "../../assets/images/chef4.png";

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
        img: chef3,
        name: "Dorothy Fevlo",
    },
    {
        id: 4,
        img: chef1,
        name: "Jules Charles"
    },
]

const Chefs = () => {
    return (
        <div className="container">
            <h3 className='text-3xl font-bold text-center sm:text-left sm:mt-12'>Meet Our Chefs</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center'>
                {
                    ChefData.map((data) => {
                        return (
                            <div key={data.id} className='rounded-md text-center mt-6'> 
                                <img 
                                    src={data.img} 
                                    alt={data.name} 
                                    className='w-32 sm:w-40 md:w-48 lg:w-56 max-w-full rounded-full bg-[#D1D1D1]' 
                                />
                                <h3 className='mt-2 text-lg font-medium'>{data.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Chefs;
