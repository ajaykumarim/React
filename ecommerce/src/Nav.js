import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export const Nav=({addto2})=>{
console.log(addto2)
    return(
        <div className='navbar'>
            {/* <img className='githublogo' src='./github.png'/> */}
            <div className='addplus'>{addto2}</div>
            <span><Link to='/Cart'><button className='cartlogo'>Carts Button</button></Link></span>
            
        </div>
    )
}