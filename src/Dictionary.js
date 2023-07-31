import React,{useState} from "react";
import "./Dictionary.css"


export default function Dictionary(){
let [keyWord,setKeyWord] = useState(null)

function search(event) {
event.preventDefault();
    alert(`searching fot ${keyWord}`)
}
function handleKeyWord (event){
    
    setKeyWord(event.target.value)
}

    return(
        <div className="dictionary"> 
<form onSubmit={search}>

    <input type="search" autoFocus={true} onChange={handleKeyWord}/>
</form>
        </div>

        
    );
}
