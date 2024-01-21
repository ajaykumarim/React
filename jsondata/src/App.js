// import {useState,useEffect} from 'react'

// import './App.css';

// function App() {
//   const [data,setData]=useState(null)
//       useEffect(()=>{
//         const newfun=async()=>{
//           const res=await fetch('https://jsonplaceholder.typicode.com/photos')
//           const data1=await res.json()
//           setData(data1)
//           console.log(data1)
//         }
//         newfun()
//       },[])

//   return (
//     <div >
//       <table>
//         <thead>
//           <tr>
//             <th>s.no</th>
//             <th>title</th>
//             <th>image</th>
//             </tr>
//         </thead>
//         <tbody>
//       { data!=null&&
//         data.map((a)=>{
//           return(<tr key={a.id}>
//             <td>{a.id}</td>
//             <td>{a.title}</td>
//             <td><img style={{height:'100px'}} src={a.url}/></td>
//             </tr>
//           )})
//       }
//       </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;



import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
//     const [a,setA]=useState()
//     useEffect(()=>{
//       const newfun=async()=>{
//       const ax=await axios.get('https://jsonplaceholder.typicode.com/users')
//         const z=ax.data
//         setA(z)
//       newfun()
// }},[])

const [post,setPost]=useState(null)
useEffect(()=>{
const fetchData=async()=>{
  try{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    setPost(response.data)
  }catch(error){
  console.log(error)
  }
}
fetchData()
console.log(post)
},[])
  return (
    <div >
      <table>
        <thead>
        <tr>
          <th>S.no</th>
          <th>Names</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        
        </thead>
        <tbody>
      {
        post!=null&&
        post.map((a)=>
          <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.email}</td>
            <td>{a.address.street},{a.address.city}</td>
          </tr>
        )
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;



