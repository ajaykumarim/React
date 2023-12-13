import React from 'react'
import { useState } from 'react'

export const Task=()=>{
    const [t,setCount]=useState("Hi")
   const newfunction =()=>{
        setCount("Hello")
    }
    return(
    <div>
        <div >{t}</div>
        <button onClick={newfunction}>Click</button>
    </div>
    )
}
