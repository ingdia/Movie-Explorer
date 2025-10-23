import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";

import useFetchMovies from "../hooks/useFetchMovies";
import useFavorite from "../hooks/useFavorites";
import { Link } from "react-router-dom";

function Home(){

const {movie, loading, error} = useFetchMovies();
const {handleClick} = useFavorite()

 return (
  <>
  
  <section className=" min-h-screen px-4 text-center">
    
  <h1> Hello this the movie time</h1>
  <SearchBar/>
  <CategoryFilter />
  <MovieCard/>
  {error&& <p>{error}</p>}
  {loading && <p>Loading... </p>}
  <div className="bg-gray-300 border-2 gap-2 border-amber-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 p-6 ">
    {
    movie.map((mov)=>(
    <Link to ={`/movie/${mov.id}`}>
        <div key={mov.id}>
        <img src={mov.image?.medium}/>
        <p>{mov.name}</p>
        <p>{mov.language}</p>
        <button onClick={handleClick} className="bg-gray-200 p-2 rounded text-amber-800">Add to favorite</button>
      </div>
    </Link>
    ))
    }</div>
  </section>
  </>
 )
}
export default Home