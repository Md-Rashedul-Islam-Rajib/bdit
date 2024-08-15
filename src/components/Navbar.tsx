import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = true;
  return (
    <nav>
        <div className='text-green-600 text-4xl font-bold bg-black py-4 px-2 cursor-pointer'>
           <Link to='/'> BD<span className='text-red-600'>IT</span> </Link>
        </div>
        <div>
        </div>
        <div>
            {
                user ? :<Link to='/login'><button>Login</button></Link>
            }
        </div>
    </nav>
  )
}

export default Navbar
