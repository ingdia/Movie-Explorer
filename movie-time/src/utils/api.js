/**
 * API utility functions for fetching movie data
 */

/**
 * Fetches data from the specified URL
 * @param {string} url - The API endpoint URL
 * @returns {Promise} - A promise that resolves to the JSON response
 */
export async function fetchMovies(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

/**
 * Fetches all shows from TVMaze API
 * @returns {Promise<Array>} - Array of movie/show objects
 */
export async function getAllShows() {
  return fetchMovies('https://api.tvmaze.com/shows');
}

/**
 * Fetches a single show by ID from TVMaze API
 * @param {string|number} id - The show ID
 * @returns {Promise<Object>} - Single show object
 */
export async function getShowById(id) {
  return fetchMovies(`https://api.tvmaze.com/shows/${id}`);
}

