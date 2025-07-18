"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg",
    alt: "Tech Product 1"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    alt: "Tech Product 2"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg",
    alt: "Tech Product 3"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    alt: "Tech Product 4"
  },
];

const ProductImages = () => {

  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image 
          src={images[index].url}
          alt="" 
          fill 
          sizes="50vw" 
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => (
            <div 
              key={image.id}
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              onClick={() => setIndex(index)}
            >
            <Image 
              src={image.url}
              alt="" 
              fill 
              sizes="30vw" 
              className="object-cover rounded-md"
          />
          </div>
        ))}
      </div>
    </div>
  )
};
export default ProductImages;
