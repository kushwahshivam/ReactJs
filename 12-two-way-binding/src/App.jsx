import React from 'react'
import { useState } from 'react'

const App = () => {
  const formHandler = (e)=>{
    e.preventDefault()
    console.log("the form is submitted by",title);
    
  }
  const [title, setTitle] = useState('')
  return ( 
    <div>
      
    <form onSubmit={(e)=>{
      formHandler(e)
    }}>
      <input 
      type="text" 
      placeholder='Enter UserName ' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
      />
      <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default App
