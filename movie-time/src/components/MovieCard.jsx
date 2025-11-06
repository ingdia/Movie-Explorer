
import { Link } from "react-router-dom"
function MovieCard({ movie, isFav, AddtoFavorite, RemoveFromMyFavorite }) {
  let button;

  if (isFav(movie)) {
    button = (
      <button
        onClick={() => RemoveFromMyFavorite(movie)}
        className="bg-green-500 p-2 rounded-full text-white"
      >
        Remove from Favorite
      </button>
    );
  } else {
    button = (
      <button
        onClick={() => AddtoFavorite(movie)}
        className="border-2  border-green-700 hover:bg-green-800 p-2 px-4 mb-2 rounded-full text-white "
      >
        Add to Favorite
      </button>
    );
  }

  return (
    <div key={movie.id} className="  font-serif  bg-neutral-900 hover:rounded-2xl  hover:p-3 p-2 rounded-xl border-2 border-gray-400 hover:border-green-600">
      <Link to={`/movie/${movie.id}`}>
       <div className="relative">
        <img src={movie.image?.medium} alt={movie.name} className="rounded-b-2xl h-60 w-full object-fill" />
  <p className="bg-green-600  absolute   px-1 md:px-4  top-2 left-2 ">
  {movie.status}
</p>
 <p className="bg-gray-600    absolute  px-1 md:px-4  bg-gradient-to-t from-green-600 to-gray-600  writing-vertical-rl bottom-16 right-2 ">{movie.language}</p>
        <p className="py-4 ">{movie.name}</p>
       </div>
      </Link>
     
      {button}
    </div>
  );
}

 
export default MovieCard