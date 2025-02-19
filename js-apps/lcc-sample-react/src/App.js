import React from "react";
import { useState } from 'react';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
function App() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
 // const [likes, setLikes] = useState(0);
 
  function handleClick() {
    //setLikes(likes + 1);
  }
 
  return (
    <div>
      <Header title="Develop. Preview. Ship. test22" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
 
      <button onClick={handleClick}>Like </button>
    </div>
  );
}

export default App;