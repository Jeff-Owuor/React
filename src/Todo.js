import React from "react";


function  Todo(props) {
    return (
        <li>
           <span>{props.todo.text}</span>
            <input  type="checkbox"/>
            <button  className="btn  btn-danger mx-3"  onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export  default   Todo;