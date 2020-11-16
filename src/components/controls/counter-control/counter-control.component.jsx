import React from 'react'
import "./counter-control.style.css"
export default function counterControl({value,id,inc,dec}) {
    
    return (
        <div className="counter-control">
            
            <div className={`${value===0?"item-counter-zero":"item-counter" } `} >{value===0?"Zero":value}</div>
            <div className="ar-controls" >
               <div className="add " onClick={()=>inc(id)}>
              <ion-icon name="add-circle" ></ion-icon>  
            </div>
            <div className={` remove ${value<=0?'disabled':''}`}  onClick={()=>dec(id)} >
                <ion-icon name="remove-circle" ></ion-icon>
            </div> 
            </div>
            
            
        </div>
    )
}
