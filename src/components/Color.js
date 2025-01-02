import React, { useState } from 'react'

const Color = () => {
    const [color, setColor]=useState('purple');
    const updateColor =() =>{
        setColor('blue');
    }
  return (
    <div>
      <h1>color:{color}</h1>
    <button onClick={updateColor}>change here</button>
    </div>
  )
}

export default Color
