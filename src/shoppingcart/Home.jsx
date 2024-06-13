import React from 'react'
import Product from './Product'
import Image1 from './image/Tshirt-red.jpg'
import Image2 from './image/shirt-blue.jpg'
import Image3 from './image/shirt-black.jpg'
import Image4 from './image/shirt-white.jpg'
import Image5 from './image/shirt-purple.jpg'
const Home = () => {
  return (
    <div className='home bg-pink-50'>
      <div className='container mx-auto gap-5 mt-5 grid lg:grid-cols-4 2xl:grid-cols-6'>
        <Product
          id="1"
          title="red T-Shirt"
          price="45"
          currency="$"
          rating="⭐⭐⭐"
          image={Image1}
        />
        <Product
          id="1"
          title=" Blue T-Shirt"
          price="35"
          currency="$"
          Rate="Rating"
          rating="⭐⭐⭐"
          image={Image2} />

        <Product
          id="1"
          title="black T-Shirt"
          price="85"
          currency="$"
          rating="⭐⭐⭐"
          image={Image3} />
        <Product
          id="1"
          title="black T-Shirt"
          price="105"
          currency="$"
          rating="⭐⭐⭐"
          image={Image4} />
           <Product
          id="1"
          title="Purpel T-Shirt"
          price="25"
          currency="$"
          rating="⭐⭐⭐"
          image={Image5}
        />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
