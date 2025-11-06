import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import Hero from "../components/Hero";

function Home({ AddtoFavorite, isFav ,RemoveFromMyFavorite}) {
  const { movie = [], loading, error } = useFetchMovies("https://api.tvmaze.com/shows");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter by search
  const searchResults = movie.filter((mov) =>
    mov.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter by category safely
  const categoryResults = movie.filter((mov) =>
    mov.genres?.some((g) => g.toLowerCase() === selectedCategory.toLowerCase())
  );

  // Decide what to display
  const displayedMovies = (() => {
    if (searchTerm && selectedCategory) {
      return movie.filter(
        (mov) =>
          mov.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
          mov.genres?.some((g) => g.toLowerCase() === selectedCategory.toLowerCase())
      );
    } else if (searchTerm) return searchResults;
    else if (selectedCategory) return categoryResults;
    else return movie;
  })();

  return (
    <section className="min-h-screen px-6 md:px-20 pt-10 text-center bg-black text-white">
      <Hero className="pt-20" />

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8 mt-6">
        <SearchBar onSearch={setSearchTerm} />
        <CategoryFilter onSelectCategory={setSelectedCategory} />
      </div>

      {/* Status messages */}
      {error && <p className="text-red-500 mt-6">{error}</p>}
      {loading && <p className="mt-6">Loading...</p>}
      {displayedMovies.length === 0 && !loading && (
        <p className="mt-6">No movies found.</p>
      )}

       {selectedCategory && (
        <h2 className="text-2xl md:text-3xl font-bold text-green-500 mt-6">
          Showing:  {selectedCategory} category
        </h2>
      )}
      <div className="bg-black md:pb-20 text-white gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-8  mt-10">
        {displayedMovies.map((mov) => (
          <MovieCard
            key={mov.id}
            movie={mov}
            AddtoFavorite={AddtoFavorite}
            RemoveFromMyFavorite={RemoveFromMyFavorite}
            isFav={isFav}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
