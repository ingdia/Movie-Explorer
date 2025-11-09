#  Movie Explorer

A modern, responsive React application for exploring and managing your favorite movies and TV shows. Built with React, React Router, and the TVMaze API.

##  Features

### Core Functionality
-  **Browse Movies**: Explore a comprehensive list of movies and TV shows from the TVMaze API
-  **Search Movies**: Real-time search functionality to find your favorite content
-  **Category Filtering**: Filter movies by genres and categories
-  **Favorites Management**: Add and remove movies from your favorites list
-  **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
-  **Routing**: Navigate between Home, Movie Details, and Favorites pages

### User Experience
-  **Fast Loading**: Optimized performance with efficient data fetching
-  **Local Storage**: Favorites are persisted in browser localStorage
-  **Modern UI**: Clean, intuitive interface with Tailwind CSS
-  **Dark Theme**: Beautiful dark theme design
-  **External Links**: Direct links to view content on TVMaze

##  Technologies

- **React 19.1.1** - UI library
- **React Router DOM 7.9.4** - Client-side routing
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **TVMaze API** - Movie and TV show data

##  Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with  links
│   ├── MovieCard.jsx       # Reusable movie card component
│   ├── SearchBar.jsx       # Search input component
│   ├── CategoryFilter.jsx  # Genre/category filter component
│   ├── Hero.jsx            # Hero section with featured movies(dumy movies)
│   └── Footer.jsx          # Footer with links and information
├── pages/
│   ├── Home.jsx            # Main page with movie list
│   ├── MovieDetails.jsx    # Individual movie detail page
│   └── Favorites.jsx       # User's favorite movies page
├── hooks/
│   ├── useFetchMovies.js   # Custom hook for fetching movie data
│   ├── useFavorites.js     # Custom hook for managing favorites (localStorage)
│   └── usePagination.js    # Custom hook for pagination functionality
├── assets/
│   ├── images/             # Image assets
│   └── react.svg           # React logo
├── App.jsx                 # Main app component with routing
├── App.css                 # App-specific styles
├── main.jsx                # Application entry point
└── index.css               # Global styles
```

##  Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Movie-Explorer.git
   cd Movie-Explorer/movie-time
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

##  Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Key Features Implementation

### React Hooks
- **useState**: Managing component state (search, filters, favorites)
- **useEffect**: Fetching data from API and handling side effects
- **Custom Hooks**: `useFetchMovies` and `useFavorites` for reusable logic

### Routing
- `/` - Home page with movie list
- `/movie/:id` - Individual movie details page
- `/favorites` - User's favorite movies collection

### State Management
- Local state for search and filtering
- localStorage for persisting favorites across sessions
- Props drilling for favorites management

### Conditional Rendering
- "Loading..." messages during API calls
- "No movies found" when search returns empty
- "You have no favorite movies yet" when favorites list is empty

##  Design Features

- **Dark Theme**: Beautiful black and green color scheme
- **Hover Effects**: Interactive elements with smooth transitions
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Modern Icons**: Lucide React icons for better UX

##  Screenshots

- Home page with movie grid <img width="1366" height="2828" alt="screencapture-movie-explorer-gilt-five-vercel-app-2025-11-09-14_01_22" src="https://github.com/user-attachments/assets/f2088f5e-d24c-42f8-a0c2-8d48d1b24087" />

- Movie details page <img width="1366" height="938" alt="screencapture-movie-explorer-gilt-five-vercel-app-movie-18-2025-11-09-14_05_09" src="https://github.com/user-attachments/assets/4613cc24-205e-466d-a67c-014dc5094d76" />

- Favorites page<img width="1366" height="887" alt="screencapture-movie-explorer-gilt-five-vercel-app-favorites-2025-11-09-14_06_49" src="https://github.com/user-attachments/assets/d726ed7e-a3dc-4bc9-be17-552798ed1dd0" />

##  Live Demo
**Live Demo**
- Vercel: (https://movie-explorer-gilt-five.vercel.app/)


##  Acknowledgments

- [TVMaze API](https://www.tvmaze.com/api) for providing free movie and TV show data
- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework



⭐ If you like this project, please give it a star on GitHub!
