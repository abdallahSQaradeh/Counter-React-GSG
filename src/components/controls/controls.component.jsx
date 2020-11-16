import React from 'react'
import "./controls.style.css"
import {ReactComponent as Reset} from "../../assets/sync-alt-solid.svg"
import CounterControl from "./counter-control/counter-control.component"
export default function controls(props) {
    return (
        <div className="controls">
           <div className="ion-loop" onClick={props.reset}></div>

            <div className="controlsButtons">
           {props.counters.map((counter, id)=>
           {
               return <CounterControl value={counter.value} id={counter.id} key={counter.id} inc={props.inc} dec={props.dec}/>
           })}
           </div>
           
        </div>
    )
}
