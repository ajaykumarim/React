import React from 'react'
import {useLocation} from 'react-router-dom'
export const Home=()=>{
    let locs=useLocation()
    console.log(locs)

    return(
        <div>
            <div>Home</div>
            <div>Hi your current location is{locs.pathname} </div>
        </div>
    )
}
