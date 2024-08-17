
import Card from '../components/Card'

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../hooks/useAxiosPublic"


const Home = () => {
 
  const axiosPublic = useAxiosPublic();

  const {data : products = []} = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      const response = await axiosPublic.get("/");
      return response.data;
    }
  })

  console.log(products)


  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((product: object) => <Card 
        key={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        category={product.category}
        brand={product.brand}
        />)}
      </div>
    </main>
  )
}

export default Home
