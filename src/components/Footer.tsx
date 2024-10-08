import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
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

      <div className="px-4 grid grid-cols-1 md:grid-cols-4 my-4">

        <div className="text-green-600 text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer">
         <Link to='/'> BD<span className="text-red-600">IT</span></Link>
        </div>

        <div>
          <h2 className="text-lg font-semibold"> About Us</h2>
          <p>Contact Us</p>
          <p>Warranty Policy</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Customer Service</h2>
          <p>Online Delivery</p>
          <p>Refund Policy</p>
          <p>EMI Terms</p>
        </div>

        <div className="text-center">
        <FaPhoneVolume className="mx-auto" />
        <p>Call Us</p>
        <p>Service Hotline : 01303050669</p>
        </div>
        
      </div>
      
      <p className='text-center'>Copyright © 2024, BDIT, All Rights Reserved</p>
    </footer>
  )
}

export default Footer
