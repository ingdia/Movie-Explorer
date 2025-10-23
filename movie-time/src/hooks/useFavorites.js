import { useState } from "react"

function useFavorite(){
 const [favorite, setFavorite] = useState([])
 const handleClick = ()=>{
      console.log("my fav")
 }
 return({favorite, handleClick})
}
export default useFavorite