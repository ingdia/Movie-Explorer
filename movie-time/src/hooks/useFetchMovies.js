import React from "react"
import { useState, useEffect } from "react"

function useFetchMovies () {
    useEffect(()=>{
           fetch("https://api.tvmaze.com/shows")
            .then(res => {
                
                return res.json();
            })
            .then(data =>{
                console.log(data)
            })
        },[]);

}
export default useFetchMovies 