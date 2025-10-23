import { useState } from "react"

function MovieCard(){
   const [name , setName] = useState("diane")
     const handleClick = () =>{
     setName("louice")
 }
 const handleClickMe = (name)=>{
    console.log(name)
 }
 return (
 <>
 <div>
   <div>
    <label></label>
    <img/>
    <p>{name}</p>
    <button onClick={handleClick}>Favorite </button>
     <button onClick={()=>{handleClickMe("diane")}}> click me Again </button>
   </div>

 </div>
 
 </>
 )
}
export default MovieCard