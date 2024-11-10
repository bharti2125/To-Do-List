import React,{ useState } from "react";

function InputArea({ onAdd }) {
 
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    if (inputText.trim()) {
      onAdd(inputText);
      setInputText("");
    }
  }


  return (
    <div className="form">
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleClick} > 
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
