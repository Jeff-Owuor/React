import  React,{useState}  from 'react'
import Todo from './Todo';


let id = 0

function  TodoHooks(){
    const [todos,setTodo] = useState([])
   function   addTodo(){
    let text = prompt("Enter  what is to be completed")
    setTodo([...todos,{text:text,id:id++}])
   }
   function removeTodo(id){
    setTodo(todos.filter( todo => todo.id  !==  id  ))
   }
      return (
        <div>
        <button  onClick={addTodo}>Add Todo</button>
        <ul>
           {todos.map(todo=> <Todo  todo={todo}  key={todo.id} onDelete={()=>removeTodo(todo.id)}/>)}     
        </ul>
        </div>
      )
}

export  default  TodoHooks;