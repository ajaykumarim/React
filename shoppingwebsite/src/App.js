// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import Content from './Content'
// import { useState } from 'react'
// export const App =()=>{
//   const [initial,final]=useState('')
//     const [ini,fin]=useState([])
//     const items=(e)=>{
//         let value1=e.target.value
//         final(value1) 
//     }
//     const add=()=>{
//         fin([...ini,initial])
//         final('') 
//     }
//     let req=ini.filter((item)=>(item.trim()!=''))
//     const [before,after]=useState(null)

//     const del=(b)=>{
//       const dele=req.filter((a)=>(a!=b))
//       after(dele)
//    }
//   //  req=before==null?req:req.filter((a)=>before.includes(a))  
//   return(
//     <div>
//         <Header/>
//         <Content req={req} items={items} add={add} initial={initial} del={del} before={before}/>
//         <Footer req={req}/>
//     </div>
//   )
// }

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export const App = () => {
  const [initial, final] = useState('');
  const [ini, fin] = useState([]);
  const items = (e) => {
    let value1 = e.target.value;
    final(value1);
  };

  const add = () => {
    fin([...ini, initial]);
    final('');
  };

  const del = (b) => {
    const dele = ini.filter((a) => a !== b);
    fin(dele);
  };

  let req = ini.filter((item) => item.trim() !== '');

  return (
    <div>
      <Header />
      <Content req={req} items={items} add={add} initial={initial} del={del} />
      <Footer req={req} />
    </div>
  );
};
