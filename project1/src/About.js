import React from 'react'
import {useParams} from 'react-router-dom'
export const About=()=>{
    let {par}=useParams()

    return(
        <div>
            <div>Home</div>
            <div>Hi your param is {par} </div>
        </div>
    )
}
