import React, { useState } from 'react'

const Counter = () => {
 const [count,setCount] = useState(0)
  const clickHandle = (e) =>{
    
      if(e.target.innerText === "Increase"){
        setCount(count+1)
      }if(e.target.innerText === "Reset"){
        setCount(0)
      }if(e.target.innerText === "Decrease"){
        setCount(count-1)
      
  }
}
  return (
    <>
    <div className="container text-center my-5 shadow shadow-lg col-lg-5 p-3 border">
      <h1>React Counter</h1>
      <h1>{count}</h1>
      <div onClick={clickHandle} className="btn btn-danger mx-2">Decrease</div>
      <div onClick={clickHandle} className="btn btn-warning mx-2">Reset</div>
      <div onClick={clickHandle} className="btn btn-success mx-2">Increase</div>
    </div>
    </>
  )
}

export default Counter