import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";

import useFetchMovies from "../hooks/useFetchMovies";

function Home(){

const {movie} = useFetchMovies();
 return (
  <>
  
  <section className=" min-h-screen px-4 text-center">
    
  <h1> Hello this the movie time</h1>
  <SearchBar/>
  <CategoryFilter />
  <MovieCard/>
  <div className="bg-gray-300 border-2 gap-2 border-amber-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 ">{
    movie.map((mov)=>(
      <div key={mov.id}>
        <img src={mov.image?.medium}/>
        <p>{mov.name}</p>
        <p>{mov.language}</p>
      </div>
    ))
    }</div>
  </section>
  </>
 )
}
export default Home