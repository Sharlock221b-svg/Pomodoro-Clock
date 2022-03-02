import React from "react";
import up from "../images/up.svg"
import down from "../images/down.svg"

export default function Break(props){
    
    return(
        <div className="break">
            <h3 id="break-label">Break label</h3>
            <img src={up} onClick={props.inc}></img>
            <span>{props.bl}</span>
            <img src={down} onClick={props.dec}></img>
        </div>
    );
}