
import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [comp, setComp] = useState(true)

  function handleState() {
    setComp(!comp)
  }
  return (
    <div>
      <button style={{ backgroundColor: "red", padding: "10px" }} onClick={handleState}>
        Show/Hide
      </button>
      {comp && <Item />}
    </div>
  );
}




function Item() {
  const [resize, setResize] = useState(window.innerWidth);
  function checkSize() {
    setResize(window.innerWidth)
  }
  useEffect(() =>{
    window.addEventListener('resize', checkSize)
    return () =>{
      window.removeEventListener('resize', checkSize)
    }
  }, [])
 return (<div>
  <h1>Window</h1>
  <h2>Size: {resize}px</h2>
  </div>)
}

export default App