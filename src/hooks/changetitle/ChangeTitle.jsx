import React, { useState } from 'react'

const ChangeTitle = () => {
    const [title,setTitle] = useState(['Ahmed','Ali','Usman','Zeeshan','Zain'])
    const [count,setCount] = useState(0)
    const changeTitle = (e)=>{
        if(count >= 4){
            setCount(0)
        }else{
            setCount(count+1)
        }  
        e.target.innerHTML ="Clicked"
        setTimeout(()=>{
        e.target.innerHTML = "Change Title"
        },500)
    }
    const surpriseTitle= ()=>{
        let random=Math.floor(Math.random()*title.length);
        setCount(random)
    }
  return (
            <>
                <div className="container text-center shadow p-3 border col-lg-5">
                    <h1>{title[count]}</h1>
                    <div onClick={changeTitle} className="btn btn-info">Change Title</div>
                    <div onClick={surpriseTitle} className="btn btn-secondary mx-3">Surprise Title</div>
                </div>

            </>
  )
}

export default ChangeTitle