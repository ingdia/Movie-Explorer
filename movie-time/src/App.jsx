import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import useFavorite from "./hooks/useFavorites";


function App() {
   const { favorite, AddtoFavorite,  RemoveFromMyFavorite, isFav } = useFavorite();
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element= {<Home  AddtoFavorite={AddtoFavorite} isFav={isFav} />}/>
      <Route path = '/favorites' element= {<Favorites favorite={favorite} AddtoFavorite={AddtoFavorite}  RemoveFromMyFavorite={RemoveFromMyFavorite}  isFav={isFav} />}/>
      <Route path ='/movie/:id' element = {<MovieDetails />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
