import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
    <div>
       <div className='card'>
        <div>
            <div className='top'>
          <img src={props.img} alt=''></img>
           <button>Save <Bookmark size={12}/></button> 
        </div>
        <div className='center'>
            <h3>{props.brandName} <span>{props.dayAgo} days ago</span></h3>
            <h2>{props.designation}</h2>
            <div className='tag'>
              <h4>{props.employmentType}</h4>
              <h4>{props.employmentLevel}</h4>
            </div>
        </div>
        </div>
        <div className='bottom'>
            <div>
                <h3> ${props.payment}/hr </h3>
                <p>{props.location}</p>
            </div>
              <button>Apply Now</button>
        </div>

      </div>
    </div>
    
  )
}

export default Card
