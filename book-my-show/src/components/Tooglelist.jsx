// import React, { useState, useEffect } from 'react'


// const Datas = [{
//     id: 1,
//     title: "Task1",
//     para: "mdmkdmx de niecxismixnsin  iednikn indeninwdi iwdninwdini widnnindwi indwniwudxn indnwendwuin inwun"
// },
// {
//     id: 2,
//     title: "Task2",
//     para: "okkkkkkkkkkkk okkkkkkkkkk indnwendwuin inwun"
// }, {
//     id: 3,
//     title: "Task3",
//     para: "de niecxismixnsin  iednikn indeninwdi iwdninwdini widnnindwi indwniwudxn indnwendwuin inwun"
// }, {
//     id: 4,
//     title: "Task4",
//     para: "indeninwdi iwdninwdini widnnindwi indwniwudxn indnwendwuin inwun"
// }]
// const Tooglelist = () => {
//     const [selected, setSelected] = useState(null)
//     const [mulSelect, setMulSelect] = useState(false)
//     const [arry, setArry] = useState([])
//     const toSelectFunction = (id) => {
//         if (mulSelect == false) {
//             setSelected(id == selected ? null : id)
//         } else {
//             setArry((prev) => {
//                 if (prev.includes(id)) {
//                     return prev.filter((a) => a != id)
//                 } else {
//                     return [...prev, id]
//                 }
//             })
//         }
//     }
//     useEffect(() => {
//         console.log(arry);
//     }, [arry]);
//     return (
//         <div>
//             <button onClick={() => setMulSelect(!mulSelect)}>multiple selection</button>
//             {
//                 Datas.map((data) =>
//                     <div key={data.id} className='list'>
//                         <h5 onClick={() => toSelectFunction(data.id)}>{data.title}+</h5>
//                         {selected == data.id || arry.includes(data.id) ?
//                             <p>{data.para}</p> : null
//                         }

//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default Tooglelist
