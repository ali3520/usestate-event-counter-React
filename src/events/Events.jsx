import React from 'react'

const Events = () => {
    const clickHandle = () => {
        console.log('hi this is new world')
    }
  return (
    <>
   <div className="container text-center border p-3 mb-3 shadow col-lg-5 ">
    <h1>This is an event tutorial</h1>
    <button onClick={()=>console.log('hello world')} className="btn btn-danger">click me</button>
    <button onClick={clickHandle} className='btn btn-warning mx-2'> button 2</button>
   </div>
    </>
  )
}

export default Events