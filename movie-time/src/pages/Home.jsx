import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";

import { useEffect } from "react";

function Home(){

useEffect(()=>{
       fetch("https://api.tvmaze.com/shows")
        .then(res => {
            
            return res.json();
        })
        .then(data =>{
            console.log(data)
        })
    },[]);
 return (
  <>
  
  <section className=" min-h-screen px-4 text-center">
    
  <h1> Hello this the movie time</h1>
  <SearchBar/>
  <CategoryFilter />
  <MovieCard/>
  <p></p>
  </section>
  </>
 )
}
export default Home