import { TbCurrencyTaka } from "react-icons/tb";

const Card = () => {
    const demo: object = {
        "id": "01",
        "name": "AMD Ryzen 9 7950X Processor",
        "image": "https://www.potakait.com/image/cache/catalog/products/components/processor/amd/amd-ryzen-9-7950x/amd-ryzen-9-7950x-processor.jpg-550x550.jpg",
        "description": "The AMD Ryzen 9 7950X CPU is built on the Zen4 microarchitecture and boasts 16 cores with two Durango CCDs named \"Persephone\". According to a leaker, the top CPU contenders will be the 7950X clocking in at 5.7 GHz and the i9-13900K with a supposed boost of up to 5.8 GHz through Thermal Velocity Boost. However, the sample described by \"Venom\" is not the highest performing CPU available.",
        "price": "56000",
        "category": "processor",
        "rating": "5",
        "brand": "AMD",
        "creation_time": "now"
      }
  return (
    <div className='shadow-lg shadow-slate-400 p-5'>
      <div className='size-36 md:size-48 lg:size-60 cursor-pointer hover:scale-105 mx-auto'>
        <img src={demo.image} alt="Product" />
      </div>
        <h3 className='md:text-lg lg:text-xl font-semibold text-red-600 text-center'>{demo.name}</h3>
        <p className='md:text-lg lg:text-xl font-medium flex items-center justify-center'>{demo.price}<span className='font-bold'><TbCurrencyTaka /></span></p>
    </div>
  )
}

export default Card
