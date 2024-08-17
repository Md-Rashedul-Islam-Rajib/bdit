
// import Card from '../components/Card'

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../hooks/useAxiosPublic"


const Home = () => {
 
  const axiosPublic = useAxiosPublic();

  const {data : products = []} = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      const response = await axios
    }
  })


  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* <Card /> */}
      </div>
    </main>
  )
}

export default Home
