import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-4'>
      <div className="flex flex-wrap justify-center gap-6">
        
        <div className='bg-sky-400 size-8 p-2 rounded-full'>
        <FaFacebookF />
        </div>
        
        <div className="bg-sky-400 size-8 p-2 rounded-full">
        <FaInstagram />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full">
        <FaRegEnvelope />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full">
        <SlSocialSkype />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full">
        <BsTwitterX />
        </div>

        <div className="bg-sky-400 size-8 p-2 rounded-full">
        <FaWhatsapp />
        </div>

      </div>
      <p className='text-center'>Copyright © 2024, BDIT, All Rights Reserved</p>
    </footer>
  )
}

export default Footer
