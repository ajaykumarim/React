import React,{useState} from 'react'
import logo from './logo.png'
import { CiMenuBurger } from "react-icons/ci";

const Header = ({navfun}) => {
    
    return (
        <div className='header'>
            <img className='logo' src={logo} />
            <div className='nav'>
                <h5 className='menu'>MENU</h5>
                <CiMenuBurger className='menu-logo' onClick={navfun}/>
            </div>
        </div>
    )
}

export default Header
