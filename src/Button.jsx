
import React from "react";

export const Button1=(props)=>{
    return(
        <button type="button" className="btn btn-primary btn-lg" id="przycisk" onClick={props.click}>
            Start/Stop
        </button>
    )
}