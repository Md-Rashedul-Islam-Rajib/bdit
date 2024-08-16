import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userphoto from "../assets/user.png";
import { FiSearch } from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';


interface SearchFormInput {
  searchQuery: string;
}

const Navbar: React.FC = () => {
  const user = true;  // This should be determined by your authentication logic
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { register, handleSubmit, reset } = useForm<SearchFormInput>();
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logged out");
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<SearchFormInput> = (data) => {
    console.log(data.searchQuery)
    reset();
  }
  return (
    <nav className="flex flex-wrap items-center justify-between bg-black p-4">
      <div className="text-green-600 text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer">
        <Link to='/'>BD<span className='text-red-600'>IT</span></Link>
      </div>
      <div>
        <div>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className='relative flex-grow mx-4 md:mt-0 order-3 sm:order-none w-full md:w-auto'
          >
            <input 
            type="text"
            className='w-full p-2 rounded bg-gray-200 focus:bg-white focus:outline-none'
            placeholder='Search....'
            {...register('searchQuery', { required: true })}
            />
            <button
            type='submit'
            className='absolute right-2 top-1/2 transform -translate-y-1/2'
            >
              <FiSearch className='text-gray-700 size-5' />
            </button>
          </form>
        </div>
      </div>
      <div className='order-2 md:order-none'>
        {user ? (
          <div className="relative inline-block text-left">
            <button 
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              <img 
                src={userphoto} 
                alt="User" 
                className="rounded-full w-8 h-8 md:w-10 md:h-10" 
              />
            </button>

            {isOpen && (
              <div 
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              >
                <div className="py-1">
                  <button 
                    onClick={handleLogout}
                    className="text-gray-700 block px-4 py-2 text-sm w-full hover:bg-gray-100 text-left"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to='/login'>
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 focus:outline-none">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
