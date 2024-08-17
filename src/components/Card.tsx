import { TbCurrencyTaka } from "react-icons/tb";

interface CardProps {
    
}

const Card = (image,name,price,category,brand) => {
    
  return (
    <div className='shadow-lg shadow-slate-400 p-5'>
      <div className='size-36 md:size-48 lg:size-60 cursor-pointer hover:scale-105 mx-auto'>
        <img src={image} alt="Product" />
      </div>
        <h3 className='md:text-lg lg:text-xl font-semibold text-red-600 text-center'>{name}</h3>
        <p className='md:text-lg lg:text-xl font-medium flex items-center justify-center'>{price}<span className='font-bold'><TbCurrencyTaka /></span></p>
        <p className="md:text-lg lg:text-xl text-center">Category : {category} </p>
        <p className="md:text-lg lg:text-xl text-center">Brand : {brand}</p>
    </div>
  )
}

export default Card
