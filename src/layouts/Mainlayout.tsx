import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className='w-screen'>
        <Navbar />
        <div>
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Mainlayout
