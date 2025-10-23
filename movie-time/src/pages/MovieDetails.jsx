import React from "react"
import useFetchMovies from "../hooks/useFetchMovies"
import { useParams,Link } from "react-router-dom";

function MovieDetaails(){
  const {id} = useParams() 
  const {data:movie,loading} = useFetchMovies(`https://api.tvmaze.com/shows/${id}` );
  

    return(<> 
    <div>
     {loading && <div>Loading</div> }
     {movie && <div>
          <p>{movie.image?.medium}</p>
           <p>{movie.Link}</p>
        </div>}
    </div>
    </>)
 
}
export default MovieDetaails