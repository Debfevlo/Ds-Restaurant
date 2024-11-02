import { div } from 'framer-motion/client';
import React from 'react';
import Slider from "react-slick";

const TestimonialsData = [
    {
        id:1,
        name:"Etornam",
        text: "This place is great!. The atmosphere is chill and cool. The staffs are really friendly. they know what they aare doing and what they are talking about.",
        img:"https://picsum.photos/101/101"
    },

    {
        id:2,
        name:"Debbie",
        text: "This place is great!. The atmosphere is chill and cool. The staffs are really friendly. they know what they aare doing and what they are talking about.",
        img:"https://picsum.photos/102/102"
    },

    {
        id:3,
        name:"Dorothy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis quod maxime magnam.",
        img:"https://picsum.photos/104/104"
    },

    {
        id:4,
        name:"Miguel",
        text: "This place is great!. The atmosphere is chill and cool. The staffs are really friendly. they know what they aare doing and what they are talking about.",
        img:"https://picsum.photos/103/103"
    },

    {
        id:5,
        name:"Anni",
        text: "This place is great!. The atmosphere is chill and cool. The staffs are really friendly. they know what they aare doing and what they are talking about.",
        img:"https://picsum.photos/102/102"
    },
]

const Testimonials = () => {

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
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },

            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:2,
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
        <div className='container min-h-[450px] py-16 md:py-0'>
        {/*title section */}
        <h3 className='text-3xl font-bold text-center sm:text-left sm:mt-12'>What Our Customer Says?</h3>

        {/*testimonials section */}

        <div>
            <Slider {...settings}>
                {
                    TestimonialsData.map((data)=>{
                        return(
                            <div className='my-6' key={data.id}>
                                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-[#FFF8EE ]">
                                    {/*image section */}
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className="rounded-full w-20 h-20"/>
                                    </div>
                                    {/*content section */}
                                    <div className='flex flex-col items-center gap-4 '>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.text}</p>
                                            <h3 className="text-brown2 font-bold">{data.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
    </section>
    
  )
}

export default Testimonials