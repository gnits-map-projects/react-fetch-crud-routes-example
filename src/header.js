import React from "react";
import {Link} from "react-router-dom";


export function Header({title}){
 
  const homestyle = {
    color: "#ebebeb",
  }
  return(
    <div>
      <header className="App-header">
            <Link to="/" style={homestyle}>Home</Link>
            <Link style={homestyle} to="/about">About</Link>
            <Link style={homestyle} to="/contacts">Contacts</Link>
      </header>
    </div>
  )
}