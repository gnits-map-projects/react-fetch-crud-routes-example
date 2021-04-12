import React from "react";

const listStyles = {
  display: "flex",
  flexDirection: "row",
  width: "300px",
  justifyContent: "flex-start"
}

export function TaskList(props) {
  const {tasks, onDelete} = props;
  return(
    <div>
     {
       tasks.map(task => {
         return (
           <div key={task.id} style={listStyles}>
             <span style={{width: "450px"}}>{task.title}</span>
             <span style={{marginLeft: "20px"}}>{task.where}</span>
             <a href="#" style={{marginLeft: "20px"}} onClick={() => onDelete(task.id)}>delete</a>
          </div>
         )
       })
     }
    </div>
  )
}