import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayout: React.FC = () => {
  const location = useLocation();
  return (
    <div className='w-screen'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Mainlayout
