import Card from '../components/Card';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Pagination from '../components/Pagination';
import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchProvider';
import Loader from '../components/Loader';


interface Product {
  id: string;
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
  const [minPrice, setMinPrice] = useState<number | '0'>(0);
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  if(searchQuery){
    console.log(searchQuery)
  }else {
    console.log('no query from navbar')
  }

  
  const { data={}, isLoading, error } = useQuery({
    queryKey: ['products', currentPage, limit,sortOption,minPrice,maxPrice, searchQuery,selectedBrand,selectedCategory],
    queryFn: async () => {
      const response = await axiosPublic.get("/", {
        params: {
          page: currentPage,
          limit: limit,
          search: searchQuery,
          brand: selectedBrand,
          category: selectedCategory,
          sort: sortOption,
          minPrice: minPrice !== 0 ? minPrice : undefined,
          maxPrice: maxPrice !== '' ? maxPrice : undefined,
        },
        
      });
      return response.data;
    },

  });

  
  
  const { products, currentPage: fetchedPage, totalPages } = data;
  console.log({currentPage,totalPages})
  if (error) return <div>Error loading products</div>;


  return (
    <main>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4 m-6'>

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

      <div
      className='flex items-center gap-2'
      >
        <input 
        type="number"
        placeholder="Min Price"
        className='border border-gray-600 rounded-lg py-2 px-1 w-1/2'
        value={minPrice === 0 ? '' : minPrice}
        onChange={(e) => setMinPrice(e.target.value ? parseInt(e.target.value) : 0)}
        />

        <input 
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        className='border border-gray-600 rounded-lg py-2 px-1 w-1/2'
        onChange={(e) => setMaxPrice(e.target.value ? parseInt(e.target.value) : '')}
        />

      </div>

      <select
      className='border border-gray-600 rounded-lg p-2'
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="date_desc">Date Added: Newest First</option>
        <option value="date_asc">Date Added: Oldest First</option>
      </select>

    </div>

    {isLoading ? <Loader /> :    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6'>
        {products?.map((product:Product) => (
          <Card
            key={product.id} // Assuming _id is the identifier field in your MongoDB collection
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
            brand={product.brand}
          />
        ))}
      </div>}
      <Pagination
        currentPage={fetchedPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default Home;
