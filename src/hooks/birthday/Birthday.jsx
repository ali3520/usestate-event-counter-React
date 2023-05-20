import React, { useState } from 'react'
import Singlebirthday from './Singlebirthday';
import { data } from './data';

const Birthday = () => {
    const [detail,setDetail]=useState(data)
    const removePerson = (id)=>{
        let newbd= detail.filter(singlebd=>singlebd.id !==id)
        setDetail(newbd)
    }
  return (
    <>
    <div className="container col-lg-6 m-auto shadow text-center p-2">
        <h1>Total  Birthday Today:{detail.length}</h1>
        {detail.map((singlebd)=>{
            return <Singlebirthday {...singlebd} remove={removePerson}/>
        })}
        
        <button onClick={()=>setDetail([])} className="btn btn-danger my-3">REMOVE ALL</button>
        <button onClick={()=>setDetail(data)} className="btn btn-success mx-3">REFRESH</button>
    </div>
    
    </>
  )
}

export default Birthday