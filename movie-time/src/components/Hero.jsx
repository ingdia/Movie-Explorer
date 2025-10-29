import React from 'react'
import image from "../assets/images/image.png"
function Hero() {
  return (
    <div className='bg-black p-2 border-2 mb-20 mt-8 border-gray-900  shadow-2xl shadow-red-500 rounded-2xl  flex justify-between font-serif text-gray-100 '>
        <div className='flex flex-col justify-start items-start px-8 py-10 space-y-6'>
            <h1 className='text-4xl font-extrabold py-2 text-red-600'>Encanto</h1>
           <div className='flex justify-between space-x-6'>
             <p>English</p>
            <p>octaber 2024</p>
            <p className='bg-amber-600 text-white font-bold px-2 rounded-full'>Rating: 8.2</p>
           </div>
           <div className='flex flex-col justify-start  items-start'>
           <p>In a home where magic defines destiny, one girl dares to stand apart. Encanto — a breathtaking tale of</p>
            <p>courage, love, and the power to save what truly matters.</p>
           </div>
            <button className="border-2  border-red-700 bg-red-800 p-2  px-4  rounded-full text-white ">
                Explore More 
            </button>
        </div>
       <img  src={image} className='rounded-4xl h-86 w-80 p-4 '/>
    </div>
  )
}

export default Hero
