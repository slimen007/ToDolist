

import React, { useState } from 'react'

export default function ListItem(props) {
  const[finish,setfinish] = useState(false);

  
  return (
    <>
    {!finish ? (
        <div className='w-50 m-auto p-0'>
        <div className='border border-primary'>{props.task}
        </div>
        <button onClick={()=> setfinish(true)}
         className='btn btn-success'>
          Finish task
        </button>
        </div>
      ) : (
        <div className='border border-danger'>
        <s className='text-danger'>{props.task}</s>
        </div>
      )}
    
   
      
  
      </>
  );
}