import React, { useState } from 'react'

const Singlebirthday = ({id,image,head,dob,remove}) =>{
    return(
        <>
            <div className="container">
                
                <div className="row d-flex justify-content-space-between align-items-center border">
                <div className="col-lg-3">
                    <img style={{width:'90%', height:'100px', objectFit:'contain',clipPath:'circle()',}} src={image} alt="" />
                </div>
                <div className="col-lg-6">
                    <h3>{head}</h3>
                    <p>{dob}</p>
                </div>
                <div className="col-lg-3">
                    <button onClick={()=>remove(id)} className="btn btn-danger">REMOVE</button>
                </div>
        </div>
                  
    </div>
    </>
      )
    

}
  
export default Singlebirthday
