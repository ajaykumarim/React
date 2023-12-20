import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export const Nav=()=>{

    return(
        <div className='navbar'>
            {/* <img className='githublogo' src='./github.png'/> */}
            <span><Link to='/Cart'><FontAwesomeIcon  className='cartlogo' icon={faCartShopping} /></Link></span>
        </div>
    )
}