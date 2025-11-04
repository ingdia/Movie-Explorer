import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import { MoveLeft } from "lucide-react";

function MovieDetails() {
  const { id } = useParams();
  const { movie, loading } = useFetchMovies(`https://api.tvmaze.com/shows/${id}`);
 console.log("Movie ID:", id);
  console.log("Movie data:", movie);
  if (loading) return <div>Loading...</div>;

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className=" bg-black text-white p-40 font-serif">
      <Link to="/" className="flex flex-col md:flex-row space-x-6 text-green-500 underline mb-4 ">
       <MoveLeft/> Back to Home
      </Link>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={movie.image?.medium || movie.image?.original}
          alt={movie.name}
          className="rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.name}</h1>
          <p><strong>Status:</strong> {movie.status}</p>
          <p><strong>Language:</strong> {movie.language}</p>
          <p><strong>Genres:</strong> {movie.genres?.join(", ")}</p>
          <p><strong>Premiegreen:</strong> {movie.premiegreen}</p>
          <p className='bg-amber-600 text-white font-bold px-2 w-[110px]'><strong>Rating:</strong> {movie.rating?.average || "N/A"}</p>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: movie.summary }} />
          <a
            href={movie.url}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 w-40 px-4 p-1 rounded-full underline block mt-2"
          >
            View on TVMaze 
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
