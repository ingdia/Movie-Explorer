import { useState } from "react"

export  default function useFavorite(){
 const [favorite, setToFavorite] = useState([]);
   const isFav= (movie) => favorite.some((m)=> m.id===movie.id);

  function AddtoFavorite(movie){
    if (!isFav(movie)){
     let myfavoriteList =  [...favorite, movie];
     setToFavorite(myfavoriteList);
     alert(`added the this ${movie.name} to favorite`);
     return myfavoriteList
    }
    else{
     alert(`this movie ${movie.name} already exist in favorite`)
    }
  }

  function RemoveFromMyFavorite (movie){
     if(!isFav(movie)){
    const updatedFavoriteList= favorite.filter((m)=>m.id !==movie.id);
    setToFavorite(updatedFavoriteList);
    alert(`Removed ${movie.name} from favorites`);
    }
  }
  return({favorite,AddtoFavorite,  RemoveFromMyFavorite, isFav})

}
