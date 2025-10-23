import React from "react"
import { useState, useEffect } from "react"

function useFetchMovies () {

    const [movie, setMovies] = useState([])
    useEffect(()=>{
           fetch("https://api.tvmaze.com/shows")
            .then(res => {
                
                return res.json();
            })
            .then(data =>{
                setMovies(data);
            })
        },[]);
  return ({movie})
}
export default useFetchMovies 