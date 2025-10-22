import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Menu } from "lucide-react"
function Navbar() {
    const [isOpen, setOpen] = useState(false);
    function showMenu(){  
      setOpen(!isOpen);    
    }
    return( 
    <>
    {/* the Destop navbar  */}
    <header className=" m-6 hidden md:flex justify-between rounded-[50px] items-center bg-black text-gray-100 py-2 px-16 shadow-md ">
       <div> <p className=' font-extrabold text-3xl lg:p-5'> Movie Times</p></div>
        <nav className='flex space-x-4 font-bold '>
            <Link to= "/" className='hover:text-red-400'>Home</Link>
            <Link to= "/favorites" className='hover:text-red-400'>Favorites</Link>
            <Link to= "/About" className='hover:text-red-400'>About</Link>
            <Link to= "/Contact" className='hover:text-red-400'>Contact</Link>
        </nav>
        <div className="flex space-x-8">
            <button className='flex items-center justify-center space-x-1 hover:text-gray-400'>
               <User className='items-center'/>
              <div>
                <h5 className="hidden lg:flex lg:text-[14px]">My accout</h5>
                <p className="hidden text-[12px] lg:flex lg:text-[14px]">Login</p>
              </div>
            </button>
        </div>
    </header>

    {/* the navigation bar for the mobile users */}
    <header className=' bg-black text-white flex  justify-between p-4 md:hidden'>
     <div>
        <div className='w-40 h-10 '> <p>Movie Times </p></div>
     </div>
     <div className='flex space-x-4 '>
        <User/> 
       <ShoppingCart />

    <div className='' onClick={showMenu}>
        <Menu />
     </div>
     </div>

     <nav className={`${
        isOpen? "block ": "hidden"
      } hidden space-x-4 font-bold ` }>
            <Link to= "/" className='hover:text-red-400'>Home</Link>
            <Link to= "/ProductsPage" className='hover:text-red-400'>Products</Link>
            <Link to= "/About" className='hover:text-red-400'>About</Link>
            <Link to= "/Contact" className='hover:text-red-400'>Contact</Link>
    </nav>
    </header>
    </>
    )
}

export default Navbar