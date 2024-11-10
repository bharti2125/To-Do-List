import React from "react";

function ToDoItem({id, text, completed, onDelete, onComplete}) {
  return (
   <li style={{ display: "flex", alignItems: "center"}}>
    <input 
      type="checkbox"
      checked={completed}
      onChange={() => onComplete(id)}
      style={{ marginRight: "10px"}}
    />
    <span style={{ textDecoration: completed ? "line-through" : "none", color: completed ? "red" : "black"}}>{text}</span>
    <button onClick={() => onDelete(id)} style={{ marginLeft: "auto"}}>❌</button>
   </li>
  );
}

export default ToDoItem;