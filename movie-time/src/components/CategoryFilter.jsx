import React from "react";

export default function CategoryFilter(){
   const category = ["drama", "animated", "Fantansy"]

    return(
        <>
 {/* this the conatiner of filtered category  */}
        <div>
        {category.map((cat, index)=>(
           <div key={index} >
            <div>
                {cat[index]}
               
            </div>

           </div> 
        ))}
        </div>
        </>
    )
}

