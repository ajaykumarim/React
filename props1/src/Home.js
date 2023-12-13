import React from 'react'
import {About} from './About'
import "./Home.css"
export const Home=()=>{
     
    const obj={
        name :"Ajay",
        age:22,
        degree:"EEE",
        place:"Anjugramam"
    }
    const arry=[{name:"manish",
                age:23,
                degree:"mechanical"},
            {
                name:"mahathi",
                age:17,
                degree:"+2"
            },
            {
                name:"ram",
                age:24,
                degree:"+2"
            },
            {
                name:"sanjay",
                age:28,
                degree:"+2"
            }]
    return(
        <>
        <div>Home</div>
        <div className="col"><About MyDetails={obj} Myarry={arry}/></div>
        </>
    )
};