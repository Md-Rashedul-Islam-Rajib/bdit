import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Mainlayout
