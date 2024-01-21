import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useState,useEffect} from 'react'

function App() {
  const [val,setVal]=useState(null)
  useEffect(()=>{
    const fetchFun=async()=>{
      const data=await axios.get('https://fakestoreapi.com/products')
      setVal(data.data)
      console.log(val)
    }
    fetchFun()
  },[])

  const starfun=(a)=>{
          let arry=[]
          const num=Math.floor(a)         
          const remainingstar=a%1!=0.0?4-num:5-num                  
          for(let i=0;i<num;i++){
                arry.push(<span className='ratcol'>&#9733;</span>)
          }
          if(a%1!=0.0){
            arry.push(<span className='halfStar'>&#9733;<span className='halfStarColor'>&#9733;</span></span>)
          }    
          for(let i=0;i<remainingstar;i++){
                arry.push(<span className='rat'>&#9733;</span>)
          }
          return arry 
  }
  
  return (
    <div className='total'>
      <div className='header'>
      <h3>HOME</h3>
      <h3>ABOUT</h3>
      <h3>CONTACT</h3>
      </div>
      <div></div>
      <div className='block'>
      {val!=null?
      val.map((a)=>
        <div className='productDiv' key={a.id}>
          <div className='imagediv'>
            <img className='image' src={a.image}/>
          </div>
          <div className='details'>
            <h3 className='category'>{a.category}</h3>
            <p><b>Product name:</b>{a.title}</p>
            <p><b>Price:</b>{a.price}$</p>
            <p><b>Description:</b>{a.description}</p>
            <p><b>Rating:</b>{starfun(a.rating.rate)}{a.rating.rate}({a.rating.count})</p>
          </div>  
        </div>
      ):<p>LOADING...</p>}
      </div>
    </div>
  );
}

export default App;
