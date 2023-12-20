import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Alignleft } from './Alignleft'
import { Cart } from './Cart'
import { Home } from './Home';
import { Nav } from './Nav';
import jasonData from "./Object.json"
function App() {
  const [first,last]=useState(null)
  const fromchild=(statevalue)=>{
    last(statevalue)
  }

  const [firsta,lasta]=useState(null)
  const [firstb,lastb]=useState(null)
  const passthis=(a,b)=>{
    lasta(a)
    lastb(b)
  }
  // console.log(firsta)
  console.log(firstb)
  let value1 = jasonData.data.filter(a => a.size ==first)
    if (first == null) {
        value1 = jasonData.data
    }
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Nav addto2={firstb}/><div className='content'><Alignleft sendasfunction={fromchild} /><Home value1={value1} passthis1={passthis}/></div></>} />
          <Route path='/Cart' element={<Cart value1={value1} addto1={firsta}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
