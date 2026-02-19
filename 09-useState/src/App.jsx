import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increseCount(){
    setNum(num+1)
  }
   function decreseCount(){
    setNum(num-1)
  }
  return (
    <div>
      <h1>Hello this is counter </h1>
      <h1>The Count is {num} </h1>

      <button onClick={increseCount}>Increse Count</button>
      <button onClick={decreseCount}>Decrese Count </button>
    </div>
  )
}

export default App
