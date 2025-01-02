import React, { useState } from 'react'

const PrevState = () => {
    const [count, setCount] =useState(0);

    const increment=() =>{
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
    }
    const decrement=()=>{
        setCount(prev=>prev-1);
        setCount(prev=>prev-1);
    }
    return(
        <div>
           <hr></hr>
           <h1>count incresed/decreased 2 times</h1>
            <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
  <span className='p-2'>{count}</span>
  <button type="button" className="btn btn-primary"onClick={increment}>+</button>
        </div>
    )
}

export default PrevState
