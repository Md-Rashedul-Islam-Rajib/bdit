import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-4'>
      <div>
        <div className='bg-sky-400 size-8 p-2 rounded-full'>
        <FaFacebookF />
        </div>
        <div className="bg-sky-400 size-8 p-2 rounded-full">
        <FaInstagram />
        </div>
      </div>
      <p className='text-center'>Copyright © 2024, BDIT, All Rights Reserved</p>
    </footer>
  )
}

export default Footer
