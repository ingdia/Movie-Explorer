import React from "react"
import { useState, useEffect } from "react"

function useFetchMovies () {

    const [movie, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true)
    
    useEffect(()=>{
           fetch("https://api.tvmaze.com/shows")
            .then(res => {
                if(!res.ok){
                    throw Error ("failed to get resources")
                }
                return res.json();
            })
            .then(data =>{
                setMovies(data);
                setLoading(false);

            })

            .catch(err=>{
               setLoading(false)
               setError(err.message) 
            })
        },[]);
  return ({movie, loading, error})
}
export default useFetchMovies 