import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Ram' age={21} img='https://images.unsplash.com/photo-1752496138192-e12c2145a99c?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='shyam' age={29} img='https://images.unsplash.com/photo-1537583370414-a155cb222ed6?q=80&w=304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='rohan' age={32} img='https://images.unsplash.com/photo-1678273338447-b56a79615272?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
         
  )
}

export default App
