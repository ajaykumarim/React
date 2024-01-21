import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
function App() {
  const [fix,setFix]=useState('')
    const navfun=()=>{
        setFix('fixed')
    }
  return (
    <div className="App">
        <div className={fix}>
            {
              fix!==''?
              <>
            <div className='nav1'>
                <h5>NAVIGATION</h5>
                <MdCancel onClick={()=>setFix('')}/>
            </div>
            <div className='nav2'>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Services</h3>
                <h3>Works</h3>
                <h3>Clients</h3>
                <h3>Contact</h3>
            </div>
            <p className='nav3'>Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
            <div>
            <TiSocialFacebook className='solo'/>
            <TiSocialTwitter className='solo'/>
            <AiFillInstagram className='solo'/>
            </div>
            </>:null
              }
        </div>
        <Header navfun={navfun}/>
        <Nav/>
    </div>
  );
}

export default App;


