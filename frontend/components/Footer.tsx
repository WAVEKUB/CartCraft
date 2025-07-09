import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">CraftCart</div>
          </Link>
          <p>1234 Tech Street, Silicon Valley, CA 94025</p>
          <span className="font-semibold">support@craftcart.com</span>
          <span className="font-semibold">+1 (555) 123-4567</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16}/>
            <Image src="/instagram.png" alt="" width={16} height={16}/>
            <Image src="/twitter.png" alt="" width={16} height={16}/>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About</Link>
              <Link href="">Careers</Link>
              <Link href="">Partners</Link>
              <Link href="">Tech Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">PRODUCTS</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Laptops</Link>
              <Link href="">Smartphones</Link>
              <Link href="">Gaming</Link>
              <Link href="">Audio</Link>
              <Link href="">All Tech</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SUPPORT</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Support</Link>
              <Link href="">My Account</Link>
              <Link href="">Find Store</Link>
              <Link href="">Warranty</Link>
              <Link href="">Returns</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">NEWSLETTER</h1>
          <p>
            Stay updated with the latest tech trends, product launches, and exclusive deals!
          </p>
          <div className="flex">
            <input 
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 bg-white"
           />
           <button className="w-1/4 bg-craftcart text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="" width={40} height={20}/>
            <Image src="/mastercard.png" alt="" width={40} height={20}/>
            <Image src="/skrill.png" alt="" width={40} height={20}/>
            <Image src="/paypal.png" alt="" width={40} height={20}/>
          </div>
        </div>
        
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className=""> 2025 CraftCart. All rights reserved.</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div> 
  )
}
export default Footer