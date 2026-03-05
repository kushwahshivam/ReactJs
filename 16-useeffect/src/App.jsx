import { useEffect, useState } from "react"



const App = () => {

  
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  
  useEffect(function()  {
  console.log("userEffect Running"); 
  },[a])
  
  return (
    <div>
      <h2>a = {a}</h2>
      <h2>b = {b}</h2>
      <button onMouseOver={()=>{
        setA(a+10)
      }}
      onMouseLeave={()=>{
        setB(b+20)
      }}> click here </button>
    </div>
  )
}

export default App
