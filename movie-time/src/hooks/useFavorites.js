import { useState, useEffect } from "react"

export  default function useFavorite(){
  // Initialize from localStorage if available
  const [favorite, setToFavorite] = useState(() => {
    
    try {
      //read data
      const storedMovie = localStorage.getItem('favorites');
      return storedMovie ? JSON.parse(storedMovie) : [];
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorite));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorite]);

  const isFav = (movie) => favorite.some((m)=> m.id===movie.id);

  function AddtoFavorite(movie){
    if (!isFav(movie)){
     let myfavoriteList =  [...favorite, movie];
     setToFavorite(myfavoriteList);
     alert( ` You added  this movie called  ${movie.name} to your  favorites`);
     return myfavoriteList
    }
    else{
     alert(`this movie ${movie.name} already exist in favorite`)
    }
  }

  function RemoveFromMyFavorite (movie){
     if(isFav(movie)){
    const updatedFavoriteList= favorite.filter((m)=>m.id !==movie.id);
    setToFavorite(updatedFavoriteList);
    alert(`you are about to remove${movie.name} from favorites`);
    console.log(" you are about to remove", movie.id, favorite);
    }
  }
  return({favorite,AddtoFavorite,  RemoveFromMyFavorite, isFav})

}
