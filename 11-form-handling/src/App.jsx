import React from 'react'

const App = () => {
  const sumbitHandler = (e) => { 
    e.preventDefault()
    console.log('Form Submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sumbitHandler(e)
      }}>
        <input type="text" placeholder="Enter Your Name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
