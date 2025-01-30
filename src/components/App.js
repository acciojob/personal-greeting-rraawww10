import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
 

  const handleInputChange = (event) => {
    setName(event.target.value);
  };



  return (
    <div>
      <label htmlFor="name-input">Enter your name:</label>
      <input
        type="text"
        id="name-input"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        data-testid="name-input"
      />
     
      {name && <h1 data-testid="greeting-message">Hello ${name}!</h1>}
    </div>
  );
};

export default App;
