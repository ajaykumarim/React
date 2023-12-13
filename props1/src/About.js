import React from 'react'
import './About.css'

export const About=(props)=>{
    // console.log(props.Myarry)
    const items=props.Myarry
      
    return(
        <>
        <div>About</div>
        {/* <div>{props.MyDetails.name}</div>
        <div>{props.MyDetails.age}</div>
        <div>{props.MyDetails.degree}</div>
        <div>{props.MyDetails.place}</div> */}
        <table>
            <tr>
            <th>s.no</th>
            <th>name</th>
            <th>age</th>
            <th>degree</th>
            </tr>
            <tbody>
            {items.map((a,b)=>
              a.age>=18? 
            <tr key={b}>
            <td>{b+1}</td>
            <td>{a.name}</td>
            <td>{a.age}</td>
            <td>{a.degree}</td>
        </tr>:null
        )}
            </tbody>
        </table>
        </>
    )
}