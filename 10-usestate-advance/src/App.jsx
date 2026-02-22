import React, { useState } from 'react'


const App = () => {
  const [num, setnum] = useState(10)

const btnClick = ()=>{
  setnum(prev=>(prev+1))
  setnum(prev=>(prev+1))
  setnum(prev=>(prev+1))
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}> Click Here</button>
    </div>
  )
}

export default App
