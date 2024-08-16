import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"

const Navbar: React.FC = () => {
    const user = true;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      const handleLogout = () => {
        // Implement your logout logic here
        console.log("Logged out");
      };

  return (
    <nav>
        <div className='text-green-600 text-4xl font-bold bg-black py-4 px-2 cursor-pointer'>
           <Link to='/'> BD<span className='text-red-600'>IT</span> </Link>
        </div>
        <div>
        </div>
        <div>
            {
                user ? 
                <div className='relative inline-block text-center'>
                    <button 
                    onClick={toggleDropdown}
                    className="flex items-center focus:outline-none"
                    >
                        <img src={user} alt="UserPNG" className="rounded-full size-10" />
                    </button>
                </div>
                {isOpen && 
                    (
                        <div 
                        className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-labelledby="user-menu"
                        >
                        <div className='py-1' role='none'>
                        <button 
                        onClick={handleLogout}
                        role='menuitem'
                        className='text-gray-700 block px-4 py-2 text-sm hover:text-gray-200'
                        >
                        </button>
                        </div>

                        </div>
                    )
                }
                :
                <Link to='/login'><button>Login</button></Link>
            }
        </div>
    </nav>
  )
}

export default Navbar
