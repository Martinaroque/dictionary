import React,{useState} from "react";
import "./Dictionary.css"
import axios from "axios"


export default function Dictionary(){
let [keyWord,setKeyWord] = useState(null)


function handleresponse(response){

    console.log(response.data[0])
}

function search(event) {
event.preventDefault();
    
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`
    axios.get(apiUrl).then(handleresponse)
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
