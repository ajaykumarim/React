import React from "react"


export const  Destructuring1=()=>{
     const Obj1={
        name:"ajay",
        degree:"EEE",
        place:"mylaudy"
    }
    const {name,degree,place}=Obj1
    return(
        <>
        <div>key1:{name}</div>
        <div>key2:{degree}</div>
        <div>key3:{place}</div>
        </>
    )
}