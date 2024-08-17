import Card from '../components/Card';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Pagination from '../components/Pagination';
import { useContext, useState } from 'react';

const Home: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const { searchQuery } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(8);

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: async () => {
      const response = await axiosPublic.get("/", {
        params: {
          page: currentPage,
          limit: limit,
        },
      });
      return response.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const { products, currentPage: fetchedPage, totalPages } = data;

  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6'>
        {products.map((product: any) => (
          <Card
            key={product._id} // Assuming _id is the identifier field in your MongoDB collection
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
            brand={product.brand}
          />
        ))}
      </div>
      <Pagination
        currentPage={fetchedPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default Home;
