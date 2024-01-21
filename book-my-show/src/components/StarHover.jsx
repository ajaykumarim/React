import React,{useState} from 'react'
import { FaStar } from "react-icons/fa";
const StarHover = () => {
    const [rating,setRating]=useState(0)
    const [con,setCon]=useState(false)
    const n=20
    const fun=(b)=>{
        setRating(b+1)
        setCon(true)
    }
    const fun2=(b)=>{
        setRating(b+1)
        if(con==true){
            setCon(false)
        }
    }
  return (
    <div>
        <h2>Star</h2>
        {
         [...Array(n)].map((_,b)=>
            <FaStar className={rating>b?'color':''} onMouseEnter={()=>fun2(b)} onMouseLeave={()=>con==true?setRating(b+1):setRating(0)} onClick={()=>fun(b)}/>
         )   
        }
    </div>
  )
}

export default StarHover

// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// const StarHover = () => {
//   const [rating, setRating] = useState(0);

//   const handleMouseEnter = (index) => {
//     setRating(index + 1);
//   };

//   const handleMouseLeave = () => {
//     setRating(0);
//   };

//   return (
//     <div>
//       {[...Array(5)].map((_, index) => (
//         <FaStar
//           key={index}
//           className={index < rating ? 'color' : ''}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarHover;

