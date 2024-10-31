import React from 'react'
import food from '../../assets/images/food2-plate.png';
import food1 from "../../assets/images/foodie1.png";
import food2 from "../../assets/images/foodie2.png";
import food3 from "../../assets/images/foodie3.png";
import food4 from "../../assets/images/foodie4.png";
import food5 from "../../assets/images/foodie5.png";
import food6 from "../../assets/images/foodie6.png";
import food7 from "../../assets/images/foodie7.png";
import food8 from "../../assets/images/foodie8.png";
import food9 from "../../assets/images/banner.png";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";



const DishMenu = [
    {
        id:1,
        name:"Pizza",
        img:food1,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$10",
        button:"Add to Cart",
    },
    {
        id:2,
        name:"Ramen",
        img:food2,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$15",
        button:"Add to Cart",
    },
    {
        id:3,
        name:"Fries with Chicken",
        img:food3,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$13",
        button:"Add to Cart",
    },
    {
        id:4,
        name:"French Fries",
        img:food4,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$20",
        button:"Add to Cart",
    },
    {
        id:5,
        name:"Salad Mix",
        img:food5,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$21",
        button:"Add to Cart",
    },
    {
        id:6,
        name:"Salad",
        img:food6,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$15",
        button:"Add to Cart",
    },
    {
        id:7,
        name:"Burger Sandwich",
        img:food7,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$10",
        button:"Add to Cart",
    },
    {
        id:8,
        name:"Steak Sandwich",
        img:food8,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$30",
        button:"Add to Cart",
    },
    {
        id:9,
        name:"Steak",
        img:food9,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$50",
        button:"Add to Cart",
    },
    {
        id:10,
        name:"Fresh Leaves",
        img:food,
        rating: <IoStarSharp />,
        description:"Very nice and satisfying",
        price:"$50",
        button:"Add to Cart",
    },
]

const Dishes = () => {
    const settings ={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1,
                    infinite:true,
                },
            },

            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },

            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },

        ]

    }
  return (
    <section>
        <div className="container min-h-[430px]">
            <h3 className='text-3xl font-bold text-center sm:text-left mt-16 sm:mt-0 mb-4'>Popular dishes</h3>
            <Slider {...settings}> 
                {
                    DishMenu.map((menu)=>{
                        return(
                            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 group place-items-center items-center text-center shadow-md p-3' key={menu.id}>

                                {/*image section */}
                                <img src={menu.img} alt="" className='w-32 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]'/>

                                {/* text section */}
                                <div className='space-y-2 mt-2'>
                                    <h3 className='font-bold text-brown2'>{menu.name}</h3>
                                    <span className='text-yellow-500 flex justify-center items-center'>{menu.rating}{menu.rating}{menu.rating}{menu.rating}</span>
                                    <p>{menu.description}</p>
                                </div>

                                {/* button section */}
                                <div className='flex gap-3 items-center space-y-2 justify-center'>
                                    <p className='text-brown2 font-semibold'>{menu.price}</p>
                                    <button className='border-2 text-sm rounded-full border-primary px-1 py-1 group-hover:btn-primary'>{menu.button}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </section>
  )
}

export default Dishes