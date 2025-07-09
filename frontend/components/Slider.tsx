"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const slides = [
    {
        id: 1,
        title: "Latest Tech Deals",
        description: "Up to 40% off on Premium Tech!",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-purple-50"
    },  
    {
        id: 2,
        title: "New Smartphones",
        description: "Latest iPhone & Samsung Models!",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
        url: "/",
        bg: "bg-gradient-to-r from-green-50 to-blue-50"
    },
   {
        id: 3,
        title: "Gaming Gear Sale",
        description: "Premium Gaming Equipment!",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        url: "/",
        bg: "bg-gradient-to-r from-red-50 to-orange-50"
    } 
];




const Slider = () => {

    const [current, setCurrent] = useState(0);

    // Auto slide
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setCurrent(prev=>(prev===slides.length-1 ? 0:prev + 1))
    //     },3000);
    //
    //     return () => clearInterval(interval);
    // })
  
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden ">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000"
            style={{ transform:`translateX(-${current * 100}vw)` }}>
                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} 
                    key={slide.id}>
                        {/*TEXT CONTAINER*/}
                        <div className="h-1/2 xl:w-1/2 flex xl:h-full flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl font-semibold">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-blue-950 text-white py-3 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/*IMGAE CONTAINER*/}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image 
                                src={slide.img} 
                                alt="" 
                                fill
                                sizes="100%" 
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">    
                {slides.map((slide, index) => (
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
                        ${current === index ? "scale-150" : ""
                        }`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                        >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Slider;
