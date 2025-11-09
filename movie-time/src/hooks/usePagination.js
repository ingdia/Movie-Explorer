import React from 'react'
import { useState } from 'react'

function usePagination(movie, moviesPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    moviesPerPage = moviesPerPage || 10;

    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex= startIndex + moviesPerPage;
    const currentMoviesOnPage= movie.slice(startIndex, endIndex);
    const totalPages = Math.ceil(movie.length/ moviesPerPage);

    function goToNextPage() {
        setCurrentPage((page)=>Math.min(page + 1, totalPages))

    }
    function goToPreviousPage() {
        setCurrentPage((page)=>Math.max(page -1 ,1))
    }
    return {
        currentMoviesOnPage,
        goToNextPage,
        goToPreviousPage,
        currentPage,
        totalPages
    }




}

export default usePagination