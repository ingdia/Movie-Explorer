import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";
import image from "../assets/images/image.png"

import useFetchMovies from "../hooks/useFetchMovies";

import { Link } from "react-router-dom";

function Home({AddtoFavorite,isFav}){

const {movie, loading, error} = useFetchMovies("https://api.tvmaze.com/shows");


// if (!movie || movie.length === 0) return <div>No movies found.</div>;
 return (
  <>
  
  <section className=" min-h-screen px-4 text-center bg-black text-white">
    
  <h1> Hello this the movie time</h1>

  <div>
    <img  src={image}/>
  </div>
  <SearchBar/>
  <CategoryFilter />
 
  {error&& <p>{error}</p>}
  {loading && <p>Loading... </p>}
  <div className="bg-black text-white gap-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 p-16">
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