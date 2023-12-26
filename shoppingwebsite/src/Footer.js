import React from 'react'

const Footer = ({req}) => {
  return (
    <div>
        <p>{req.length==1?`${req.length} Number of task`:`${req.length} Number of tasks`}</p>
        <h5>copyright &copy; 2023</h5>
    </div>
  )
}

export default Footer
