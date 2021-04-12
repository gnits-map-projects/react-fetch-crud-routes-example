import React, {useState} from "react";

export function AddTask ({onNewTask}) {
  const [title, setTitle] = useState("");
  const [where, setWhere] = useState("");

  const handleChange = (text) => {
    setTitle(text)
  }

  const handleButtonClick = () => {
    onNewTask({
      title, where
    });
    setTitle("");
    setWhere("")
  }

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    margin: "20px",
    padding: "10px",
    border: "1px solid #ebebeb",
    height: "100px",
    justifyContent: "space-between"
  }

  return (
    <form style={formStyles}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <label style={{width: "150px"}}>Title:</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
        <label style={{width: "150px"}}>Where:</label>
        <input
          type="text"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
        />
      </div>
      <button
        type="submt"
        style={{width: "100px", alignSelf: "flex-end"}}
        onClick={() => handleButtonClick()}
      >
        Add task
      </button>
    </form>
  )
}