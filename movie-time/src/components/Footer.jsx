import React from 'react'
import { Link } from 'react-router-dom'
import {Heart, House} from "lucide-react"

function Footer() {
  return (
    <section className='  p-10 bg-black text-white  font-serif border-t-2  border-gray-600'>
<div className='grid md:grid-cols-4' >
          <div>
        <h1 className='font-extrabold text-3xl lg:p-5 text-green-600'> Movie Times</h1>
        <p>Never miss a movie!</p>
        <p>Check showtimes,</p>
        <p>plan your visit, and enjoy the big screen experience.</p>
      </div>
      <div className='space-y-4'>
        <h1 className='font-bold text-xl '>Quick Links</h1>
        <nav className='flex flex-col text-gray-400 space-y-2 '>
            <Link to='/'  className='flex flex-row  space-x-1  hover:text-green-600'><House /><p>Home</p></Link>
            <Link to='/Favorite' className='flex flex-row space-x-1  hover:text-green-600'><Heart /><p>Favorite</p></Link>
        </nav>
      </div>
      <div className='space-y-2 text-gray-400 '>
        <h1 className='font-bold text-xl pb-2 text-white' >Follow Us</h1>
        <p>Youtube</p>
        <p>Instagram</p>
        <p>TikTok</p>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Contact Us</h1>
        <p>+250 798 334 054</p>
        <p>+250 798 887 890</p>
        <p>ngabirediane02@gmail.com</p>
      </div>
</div>
<div>

</div>
    </section>
  )
}

export default Footer
