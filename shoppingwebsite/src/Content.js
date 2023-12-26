// import React from 'react'
// const Content = ({req,items,add,initial,del,before}) => {
//      console.log(req)
    
//   return (
//     <div>
//         <input onChange={items} type='text' value={initial}/>
//         <button onClick={add}>Add</button>
//         <ol>
//         {   
//            req.map((items,index)=>(
//                     <li key={index}>{items}<button onClick={()=>del(items)}>Delete</button></li>
//             ))
//         }
//         </ol>
//     </div>
//   )
// }

// export default Content


import React from 'react';

const Content = ({ req, items, add, initial, del, before }) => {
  return (
    <div>
      <input onChange={items} type='text' value={initial} />
      <button onClick={add}>Add</button>
      <ol>
        {req.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => del(item)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;

