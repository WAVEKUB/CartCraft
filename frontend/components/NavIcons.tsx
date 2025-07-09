"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartModel from "./CartModel";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn){
            router.push("/login");
        }
        setIsProfileOpen(prev => !prev);
    }

    return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image 
            src="/profile.png" 
            alt=""  
            width={22} 
            height={22} 
            onClick={handleProfile}
            className="cursor-pointer"
        />
        {isProfileOpen && (<div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-lg">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
        </div>
        )}

        <Image 
            src="/notification.png" 
            alt="" 
            width={22} 
            height={22} 
            className="cursor-pointer"
        />

        <div className="relative cursor-pointer " onClick={() => setIsCartOpen(prev => !prev)}>
            <Image 
                src="/cart.png" 
                alt="" 
                width={22} 
                height={22} 
            />
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-craftcart rounded-full text-sm flex items-center justify-center text-white">2</div>
        </div>
        {isCartOpen && (<CartModel />)}
    </div>
  );
};
export default NavIcons;
