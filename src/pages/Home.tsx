
import Card from '../components/Card'

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../hooks/useAxiosPublic"
import Pagination from '../components/Pagination'

const Home: React.FC = () => {
 
  const axiosPublic = useAxiosPublic();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(8);

  const {data : products = []} = useQuery({
    queryKey: ['products', currentPage],
    queryFn: async () => {
      const response = await axiosPublic.get("/", {
        params: {
          
        }
      });
      return response.data;
    }
  })

  console.log(products)


  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6'>
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
