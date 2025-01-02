import React, { useState } from 'react'

const Obj = () => {
    const [person, setPerson] =useState({
        name:"alex",
        age:43,
        id:2
    })
    const updateDetails =() =>{
        setPerson((prev)=>{
            return{
                ...prev,age:23,name:"damodar",id:5
            }
        })
    }
  return (
    <div>
      <h1>name:{person.name}</h1>
      <h2>age:{person.age}</h2>
      <h3>id:{person.id}</h3>
      <button onClick={updateDetails}>updateDetails</button>
    </div>
  )
}

export default Obj
