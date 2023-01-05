import React from "react";
import Todo from "./Todo";

let  id  = 0

class  TodoManager  extends  React.Component{
         constructor(){
            super()
            this.state=
            {
                todos:[]
            }
         }
         addTodo(){
               const  text = prompt("Enter  what  you would like to be done ...")
              this.setState({
                todos:[
                    ...this.state.todos,  
                    {id:id++,text:text}]
              })
         }

        deleteTodo(id){
               this.setState({
                todos:  this.state.todos.filter(todo => todo.id !== id)
               })
        }

         render(){
            return(
            <div>
            <button  onClick={()=>this.addTodo()}  className="btn  btn-secondary">Add Todo</button>
            <ol>
                {this.state.todos.map((todo) =>
                 <Todo  
                onDelete={()=>this.deleteTodo(todo.id)}
                key={todo.id} todo={todo}
                />)}
            </ol>
            </div>
            )

         }
}

export  default  TodoManager;
