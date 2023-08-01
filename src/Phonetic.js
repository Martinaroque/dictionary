import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){

return(

    <div className="phonetic">

       <strong><a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">Listen</a></strong> 
        <br />
        {props.phonetic.text}
    </div>
)

}