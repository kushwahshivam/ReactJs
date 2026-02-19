import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = ( props ) => {
  return (
    <div className='h-full rounded-4xl shrink-0 overflow-x-auto w-80 overflow-hidden relative bg-red-500 rounded-4xl'>
        <img className="w-full h-full object-cover" src={props.img}/>
        <RightCardContent id={props.id} users={props.users}/>
    </div>
  )
}

export default RightCard
