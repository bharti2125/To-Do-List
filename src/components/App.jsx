import React,{ useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, {text: inputText, completed: false}]);
  }

  function deleteItem(id) {
   setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  function toggleComplete(id) {
    setItems((prevItems) => prevItems.map((item, index) =>  index === id ? {...item, completed: !item.completed} : item) );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do-List</h1>
      </div>
      <InputArea  onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
           <ToDoItem 
             key={index}
             id={index}
             text={item.text}
             completed={item.completed}
             onDelete={deleteItem}
             onComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
