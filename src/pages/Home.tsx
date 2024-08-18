import Card from '../components/Card';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Pagination from '../components/Pagination';
import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchProvider';


interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  rating: string;
  created_time: string;
}

const Home: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const { searchQuery } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(8);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  if(searchQuery){
    console.log(searchQuery)
  }else {
    console.log('no query from navbar')
  }
  const { data={}, isLoading, error } = useQuery({
    queryKey: ['products', currentPage, limit,sortOption, searchQuery,selectedBrand,selectedCategory],
    queryFn: async () => {
      const response = await axiosPublic.get("/", {
        params: {
          page: currentPage,
          limit: limit,
          search: searchQuery,
          brand: selectedBrand,
          category: selectedCategory,
          sort: sortOption,
        },
        
      });
      return response.data;
    },

  });

  
  
  const { products, currentPage: fetchedPage, totalPages } = data;
  console.log({currentPage,totalPages})
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;


  return (
    <main>

    <div className='flex justify-between items-center m-6'>

      <select
      className='border border-gray-600 rounded-lg p-2'
      value={selectedBrand}
      onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value=''>All Brands</option>
        <option value='AMD'>Advanced Micro Device</option>
        <option value='intel'>Intel</option>
        <option value='MSI'>Micro Star International</option>
        <option value='maxsun'>Maxsun</option>
        <option value='seagate'>Seagate</option>
        <option value='samsung'>Samsung</option>
        <option value='LG'>Lucky Goldstar</option>
        <option value='NZXT'>NZXT</option>
        <option value='asus'>Asus</option>
        <option value='EKWB'>EKWB</option>
        <option value='gigabyte'>Gigabyte</option>
        <option value='yeston'>Yeston</option>
        <option value='colorful'>Colorful</option>
        <option value='antec'>Antec</option>
        <option value='team'>Team</option>
        <option value='lexar'>Lexar</option>

      </select>

      <select
      className='border border-gray-600 rounded-lg p-2'
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Category</option>
        <option value="monitor">Monitor</option>
        <option value="SSD">Solid State Drive</option>
        <option value="RAM">Random Access Memory</option>
        <option value="PSU">Power Supply Unit</option>
        <option value="GPU">Graphics Processing Unit</option>
        <option value="CPU Cooler">CPU Cooler</option>
        <option value="motherboard">Motherboard</option>
        <option value="processor">Processor</option>

      </select>

      <select name="" id=""></select>

    </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6'>
        {products?.map((product:Product) => (
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
