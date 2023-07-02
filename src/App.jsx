import products from './data'
import './App.css'

// function App() {
//     console.log("removedItem");
//  const [data, setData] = useState(products)
// function removeItem(id) {
//   setData(prevData => {
//     return prevData.filter((product) => {
  //       return product.id !== id;
//     })
//   })

// }
// function handleClick() {
  //   setData([])
  // }
  //   return (
//     <>
//       <div className="container" >
//         {data.map((product) => {
//           const { id, name, image, price, description } = product;
//           return (
//             <div
//               className="sub-container"
//               key={id}
//               style={{ display: "grid", gridTemplate: "auto/1fr 1fr 1fr" }}
//             >
//               <h1>
//                 {name}{" "}
//                 <span style={{ color: "red" }} onClick={() => removeItem(id)}>
//                   X
//                 </span>
//               </h1>
//               <img
//                 src={image}
//                 alt=""
//                 width={"150px"}
//                 height={"150px"}
//                 style={{ objectFit: "cover" }}
//               />
//               <h3>{description}</h3>
//               <h5>{price}</h5>
//             </div>
//           );
//         })}
//         <button onClick={handleClick} style={{backgroundColor:'purple'}}>Clear All</button>
//       </div>
//     </>
//   );
// }

import React from "react";
import { useState, useEffect } from 'react'

function App() {
  const [size, setSize] = useState(window.innerWidth)

  function checkSize() {
    setSize( window.innerWidth)
  }
  
useEffect(() =>{
  window.addEventListener('resize', checkSize)
  console.log('call useeffect');

  return () => {
    window.removeEventListener('resize', checkSize)
    console.log('remove');
  }
})

  return (
    <div>
        <h1>{size}</h1>
    </div>
  )
}

export default App
