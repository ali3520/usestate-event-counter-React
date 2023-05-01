import React, { useState } from 'react'

const UseStatesbasic = () => {
    const [title,setTitle] = useState ('Hello World!')
    const clickHandle= ()=>{
        if(title === 'Hello World!'){
            setTitle('This is new World')
        }else{
            setTitle('Hello World!')
        }
        
    }
  return (
    <>
        <div className="container text-center my-3 shadow col-lg-5 border p-3">
            <h1>{title}</h1>
            <div onClick={clickHandle} className="btn btn-info">
                Change Title
            </div>
        </div>
    </>
  )
}

export default UseStatesbasic