import React from "react";
import up from "../images/up.svg"
import down from "../images/down.svg"

export default function Session(props){
    return(
       <div className="session">
             <h3 id="session-label">Session Length</h3>
            <img src={up} onClick={props.inc} id="session-increment"></img>
            <span id="session-length">{props.sl}</span>
            <img src={down} onClick={props.dec} id="session-decrement"></img>
       </div>
    );
}