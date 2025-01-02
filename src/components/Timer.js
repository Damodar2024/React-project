import React, { useState } from 'react'



const Timer = () => {
    const [seconds , setSeconds]=useState(0);
    const [running , setRunning]=useState(false);
    const [intervalId, setIntervalId] =useState(null);
    const startTimer=()=>{
        if(!running){
            setRunning(true);
            const id=setInterval(()=>setSeconds(seconds=>seconds+1),1000);
            setIntervalId(id)
        }
    }
    const stopTimer=()=>{
        if(running){
            setRunning(false);
            clearInterval(intervalId);
        }
    }
  return (
    <div>
      <h1>Timer</h1>
      <h2>{seconds}</h2>
    {
        running?
        <button onClick={stopTimer}>STOP</button>:
        <button onClick={startTimer}>START</button>
    }
    </div>
  )
}

export default Timer
