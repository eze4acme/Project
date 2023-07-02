import { useState } from 'react'
import products from './data'
import './App.css'

function App() {
 const [data, setData] = useState(products)
function handleClick() {
  setData([])
}
  return (
   <>
    {
      data.map(product => {
        const {id, name, image, price, description} = product
        return(
          <div className="container" key={id}>
            <h1>{name} <span>X</span> </h1>
            <img src={image} alt="" width={'150px'} height={'150px'} />
            <h3>{description}</h3>
            <h5>{price}</h5>
            <button onClick={handleClick}>Clear All</button>
          </div>
        )
      })
    }
   </>
  )
}

export default App
