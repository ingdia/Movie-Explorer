import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import Hero from "../components/Hero";
import usePagination from "../hooks/usePagination";

function Home({ AddtoFavorite, isFav, RemoveFromMyFavorite }) {
  const { movie: moviesData, loading, error } = useFetchMovies("https://api.tvmaze.com/shows");
  const movie = Array.isArray(moviesData) ? moviesData : [];

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

  const {currentMoviesOnPage,goToNextPage,goToPreviousPage,currentPage,totalPages} = usePagination(displayedMovies, 20);

  return (
    <section className="min-h-screen px-6 md:px-20 pt-10 text-center bg-black text-white">
      <Hero className="pt-20" />

      {/* Filters */}
<div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-10 gap-x-8 mt-6">
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
      <div className="bg-black md: pb-20 text-white gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-8  mt-10">
        {currentMoviesOnPage.map((mov) => (
          <MovieCard
            key={mov.id}
            movie={mov}
            AddtoFavorite={AddtoFavorite}
            RemoveFromMyFavorite={RemoveFromMyFavorite}
            isFav={isFav}
          />
        ))}
      </div>

      {/* pagination  */}
    
<div className="pb-10 flex justify-end">
   <button onClick={goToPreviousPage} disabled={currentPage===1} className="bg-green-800 text-white px-4 py-2 m-2 rounded disabled:bg-gray-400">
    Prev
    </button>

    <div className="flex py-4 space-x-2">
     <p>{currentPage}</p><p>Outof </p> <p>{totalPages}</p>
    </div>
    <button onClick={goToNextPage} disabled={currentPage===totalPages} className="bg-green-800 text-white px-4 py-2 m-2 rounded disabled:bg-gray-400">
      Next
    </button>
</div>

    </section>
  );
}

export default Home;
