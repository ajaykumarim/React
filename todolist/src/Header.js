import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    // <div className='head'>
    //   <h5 className='profile'><Link to='/Profile'>Profile</Link></h5>
    // </div>
    <div className='head'>
        <div className='border'>
      <h5 className='profile'><Link to='/Profile'>0 0</Link></h5>
      <div className='bod'>ok</div>
      </div>
    </div>
  )
}

export default Header
