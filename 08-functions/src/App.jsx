import React from 'react'

const pageScrolling = (e) => {
  console.log('Scrolling......',e.target);
}

const App = () => {
  return (
    <div onWheel={(e)=>{
      pageScrolling(e)
    }}>

    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
    
    </div>
  )
}

export default App
