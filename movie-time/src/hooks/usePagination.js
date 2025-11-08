import React from 'react'
import { useState } from 'react'

function usePagination(movie, moviesPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(movie.length/moviesPerPage);



}

export default usePagination