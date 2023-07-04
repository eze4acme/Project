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

// import React from "react";

// function App() {
//   const [size, setSize] = useState(window.innerWidth)

//   function checkSize() {
  //     setSize( window.innerWidth)
//   }

// useEffect(() =>{
  //   window.addEventListener('resize', checkSize)
  //   console.log('call useeffect');
  
  //   return () => {
//     window.removeEventListener('resize', checkSize)
//     console.log('remove');
//   }
// })

//   return (
  //     <div>
  //         <h1>{size}</h1>
  //     </div>
  //   )
  // }

  // export default App
  
// import { useState, useEffect } from 'react'
// import React from 'react'

// function App() {
// const [isLoading, setIsLoading] = useState(true)
// const [isError, setIsError] = useState(false)
// const [value, setValue] = useState([])
// useEffect(() =>{
// fetch("https://api.github.com/users")
// .then(res => {
//   if (res.ok) {
//     return res.json()
//   }else{
//     setIsLoading(false)
//     setIsError(true)
//     throw new Error(res.statusText)
//   }
// })
// .then(data => {
//   // const {login} = data
//   console.log(data[0].login);
//   setValue(data[0].login);
//   setIsLoading(false)
// })
// .catch(error => console.error(error))
// }, [])
//  if(isLoading){
//    return (
//      <div>
//       <h1>Loading....</h1>
//      </div>
//    );
//  }
//  if(isError){
//    return (
//      <div>
//        <h1>Error.....</h1>
//      </div>
//    );
//  }
//  return (
//   <h1>{value}</h1>
//  )
//   }

// export default App

import React, { useState, useEffect } from 'react'

function App() {
  const [comp, setComp] = useState(true)
  function handleState() {
    setComp(!comp)
  }
  return (
    <div>
      <button style={{ backgroundColor: "red", padding: "8px" }} onClick={handleState}>
        Show/Hide
      </button>
      {comp && <Item />}
    </div>
  );
}

function Item() {
  
 return (<div>
  <h1>Window</h1>
  <h2>Size:</h2>
  </div>)
}

export default App