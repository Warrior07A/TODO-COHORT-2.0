import { useState } from 'react';
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todocomponent } from './Components/Todo'

function App() {
    const [todos,setTodo]=useState([]);
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json=await res.json();
        setTodo(json.todos);
        console.log(todos);
      } )

  return (
    <>  
    <CreateTodo/>
    <Todocomponent todos={todos}/>
    </>
  )
}

export default App
