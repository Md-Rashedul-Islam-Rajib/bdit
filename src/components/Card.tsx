import React from 'react'

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
    <div>
      <div className='size-60 cursor-pointer'>
        <img src={demo.image} alt="Product" />
      </div>

    </div>
  )
}

export default Card
