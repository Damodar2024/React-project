import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0);
    const [color , setColor]=useState('blue');
    useEffect(()=>{
        console.log("this is no dependency array");
    })
    useEffect(()=>{
        console.log("this is having empty dependency array");
       
    },[])
    useEffect(()=>{
        console.log("having one dependency array");
        return()=>{
            console.log("cleanup function executed");
        }
    },[count,color])
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Color:{color}</h1>
        <button onClick={()=>{setColor('green')}}>Change Color</button>
      
    </div>
  )
}

export default Effect
