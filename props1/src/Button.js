import React from 'react'
import { useState } from 'react'
export const Button=()=>{
    const[n,setcount]=useState(0)

    let myfunction1=()=>{
        setcount(n+1)
    }
    let myfunction2=()=>{
        setcount(n-1)
    }
    return(
        <>
        <button  onClick={myfunction1}>+</button>
        <div>{n}</div>
        <button onClick={myfunction2}>-</button>
        </>
    )
}


// let n=0
//   let myfunction1=()=>{
//     n+=1
//     console.log(n)
// }
// let myfunction2=()=>{
//     n-=1
//     console.log(n)
// }