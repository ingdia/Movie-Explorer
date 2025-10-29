import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
function Navbar() {

    return( 
    <>
    {/* the Destop navbar  */}
    <header className=" border-b-2 border-gray-700  fixed w-full z-10 flex justify-between items-center bg-black font-s text-gray-100 py-2 px-16 shadow-md ">
       <div> <p className=' font-extrabold text-3xl lg:p-5'> Movie Times</p></div>
        <SearchBar/>
        
        <nav className='flex space-x-4 font-bold '>
            <Link to= "/" className='hover:text-red-600'>Home</Link>
            <Link to= "/favorites" className='hover:text-red-600'>Favorites</Link>
            
        </nav>
       
    </header>

    
    </>
    )
}

export default Navbar