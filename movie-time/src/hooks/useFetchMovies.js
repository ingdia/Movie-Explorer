import React from "react"
import { useState, useEffect } from "react"
// trying to make a reused fetching hook for all endpoint 

function useFetchMovies (url) {

    const [movie, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true)
    
    useEffect(()=>{
           fetch(url)// we will pass different endpoint 
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
        },[url]);
  return ({movie, loading, error})
}
export default useFetchMovies 