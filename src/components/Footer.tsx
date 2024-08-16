import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-4'>
      <div className="flex flex-wrap justify-center gap-4">
        
        <div className='bg-sky-400 size-8 p-2 rounded-full cursor-pointer'>
        <FaFacebookF />
        </div>
        
        <div className="bg-sky-400 size-8 p-2 rounded-full cursor-pointer">
        <FaInstagram />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full cursor-pointer">
        <FaRegEnvelope />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full cursor-pointer">
        <SlSocialSkype />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full cursor-pointer">
        <BsTwitterX />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full cursor-pointer">
        <FaWhatsapp />
        </div>

      </div>

      <div className="px-4">

        <div className="text-green-600 text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer">
         <Link to='/'> BD<span className="text-red-600">IT</span></Link>
        </div>

        <div>
          <h2> About Us</h2>
          <p>Contact Us</p>
        </div>

      </div>
      
      <p className='text-center'>Copyright © 2024, BDIT, All Rights Reserved</p>
    </footer>
  )
}

export default Footer
