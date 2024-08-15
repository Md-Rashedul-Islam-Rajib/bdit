import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='text-green-600'>
           <Link> BD<span className='text-red-600'>IT</span> </Link>
        </div>
        <div></div>
        <div></div>
    </nav>
  )
}

export default Navbar
