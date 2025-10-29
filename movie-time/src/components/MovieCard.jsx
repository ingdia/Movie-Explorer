
import { Link } from "react-router-dom"
function MovieCard({ movie, isFav, AddtoFavorite, RemoveFromMyFavorite }) {
  let button;

  if (isFav(movie)) {
    button = (
      <button
        onClick={() => RemoveFromMyFavorite(movie)}
        className="bg-red-500 p-2 rounded text-white"
      >
        Remove from Favorite
      </button>
    );
  } else {
    button = (
      <button
        onClick={() => AddtoFavorite(movie)}
        className="border-2 border-red-700 hover:bg-red-800 p-2 px-4 mb-2 rounded-full text-white "
      >
        Add to Favorite
      </button>
    );
  }

  return (
    <div key={movie.id} className=" font-serif bg-gray-700 hover:rounded-xl p-2 hover:p-0 rounded border-2 border-gray-400 hover:border-red-600">
      <Link to={`/movie/${movie.id}`}>
       <div className="relative">
        <img src={movie.image?.medium} alt={movie.name} className="rounded-b-2xl h-60 w-60" />
  <p className="bg-red-600  absolute  px-1 md:px-4  top-2 left-2 ">
  {movie.status}
</p>

        <p className="pt-4">{movie.name}</p>
       </div>
      </Link>
      <p className="absolute rotate-[-20deg] ml-22 bg-gray-600   px-6 hover:px-8 rounded-2xl -mt-20 ">{movie.language}</p>
      {button}
    </div>
  );
}


export default MovieCard