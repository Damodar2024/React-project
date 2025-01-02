import React, { useState } from 'react'

const Counter = () => {
   const[count , setCount]=useState(0);
//    const increment=() =>{
//     setCount(count+1);
//    }
//    const decrement=()=>{
//     setCount(count-1);
//    }
  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={()=>setCount(count-1)}>-</button>
  <span className='p-2'>{count}</span>
  <button type="button" className="btn btn-primary"onClick={()=>setCount(count+1)}>+</button>
</div>
    </div>
  )
}

export default Counter
