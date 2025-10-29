import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";


import useFetchMovies from "../hooks/useFetchMovies";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Home({AddtoFavorite,isFav}){

const {movie, loading, error} = useFetchMovies("https://api.tvmaze.com/shows");


// if (!movie || movie.length === 0) return <div>No movies found.</div>;
 return (
  <>
  
  <section className=" min-h-screen px-20 pt-30 text-center bg-black text-white">
   <Hero/>
  <CategoryFilter />
 
  {error&& <p>{error}</p>}
  {loading && <p>Loading... </p>}
  <div className="bg-black text-white gap-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 mt-10">
    {
     movie&&movie.map((mov)=>(
     
      <MovieCard key={mov.id} movie={mov} AddtoFavorite={AddtoFavorite} isFav={isFav}/>
     
 
    ))
    }</div>


    
  </section>

  
  </>
 )
}
export default Home