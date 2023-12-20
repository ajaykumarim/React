
import React, { useState } from 'react'
export const Alignleft = ({sendasfunction}) => {
    const [statevalue, setstatevalue] = useState(null)
    const updatestate1 = (arg) => {
        setstatevalue(arg) 
    }
    // console.log(statevalue)
    sendasfunction(statevalue)
    return (
        <div className="leftSection">
            <div>
            </div>
            <div className='leftleft'>
                <h5>sizes:</h5>
                <div className="sizes">
                    <p onClick={()=>updatestate1("S")} className="sizeBar">S</p>
                    <p onClick={()=>updatestate1("M")} className="sizeBar">M</p>
                    <p onClick={()=>updatestate1("L")} className="sizeBar">L</p>
                </div>
                <p>Leave a star on Github if this repository was useful :)</p>
                <a href="#">star</a>
            </div>
        </div>
    )
}