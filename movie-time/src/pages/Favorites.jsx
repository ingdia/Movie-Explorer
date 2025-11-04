import React from "react";
import MovieCard from "../components/MovieCard";
import {Heart } from "lucide-react"

function Favorites({ favorite, AddtoFavorite, isFav, RemoveFromMyFavorite}) {
  return (
    <section className="min-h-screen px-4 text-center bg-black text-white pt-40 md:px-20">
      <div className="flex flex-row justify-center items-center space-x-2">
        <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
        <Heart className=" text-green-700 h-10 w-10 -mt-3" />
      </div>

      {favorite.length === 0 ? (
        <p className="text-white text-2xl">You have no favorite movies yet.</p>
      ) : (
        <div className=" grid grid-cols-2 space-x-3 sm:grid-cols-3 md:grid-cols-5 p-6">
          {favorite.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFav={isFav} AddtoFavorite={AddtoFavorite} RemoveFromMyFavorite={RemoveFromMyFavorite}/>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
