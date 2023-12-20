
import React, { useState } from 'react'
import { Home } from './Home'
export const Alignleft = ({val}) => {
    const [statevalue, setstatevalue] = useState(null)
    const updatestate1 = () => {
        setstatevalue("S")
    }
    const updatestate2 = () => {
        setstatevalue("M")
    }
    const updatestate3 = () => {
        setstatevalue("L")
    }
    return (
        <div className="leftSection">
            <div>
            <Home propvalue={statevalue} />
            </div>
            <div className='leftleft'>
                <h5>sizes:</h5>
                <div className="sizes">
                    <p onClick={updatestate1} className="sizeBar">S</p>
                    <p onClick={updatestate2} className="sizeBar">M</p>
                    <p onClick={updatestate3} className="sizeBar">L</p>
                </div>
                <p>Leave a star on Github if this repository was useful :)</p>
                <a href="#">star</a>
            </div>
        </div>
    )
}