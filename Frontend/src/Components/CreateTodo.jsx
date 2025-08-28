import { useState } from "react";

export function CreateTodo() {
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("")

    return (
    <>  
    <div>
      <input onChange={function(e){
        const value= e.target.value;
        settitle(value);
      }} type="text"></input>
      <input 
      onChange={function(e){
        const value2=e.target.value;
        setdescription(value2);
      }}
      type="text"></input>
      <button onClick={()=>{
        fetch("http:localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description,
            }),
            headers :{
                "contentType":"application/json"                   //you have to sent this if using fetch or use axios
            }
        })
            .then(async function(res){
                const json = await res.json();
        
                alert("todo added");
            })
      }}>CLICK ME </button>
      
      
      </div>

    </>
  )
}
