import React, { useEffect ,useState } from 'react'

const TimerHook = () => {
    const [time,setTime] =useState(0);
    const [active,setActive] = useState(false);
    const [pause ,setPause] =useState(false);
    useEffect(()=>{
        let interval;
        if(active && !pause){
            interval=setInterval(()=>{
                setTime(time=>time+1)
            },1000)
        }else{
            clearInterval(interval);
        }
        return(()=>clearInterval(interval))
    },[active,pause])
    const startTimer=()=>{
        setActive(true);
        setPause(false);
    }
    const pauseTimer=()=>{
        setPause(true);
    }
    const resetTimer=()=>{
        setTime(0);
        setActive(false);
        setPause(false);
        }
   
  return (
    <div className='container my-5 border border-secondary p-4 rounded shadow'>
        <div className='text-center'>
        <h1 >{time}</h1>
        {!active &&!pause?
        <button onClick={startTimer}>Start</button>:
        <button onClick={pauseTimer}>Pause</button>
        }
        <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default TimerHook
