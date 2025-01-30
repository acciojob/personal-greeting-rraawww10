import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      setGreeting("Please enter your name.");
    } else if (trimmedName === "n") {
      setGreeting("Hello n!");
    } else {
      setGreeting(`Hello ${trimmedName}!`);
    }
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
      <button onClick={handleSubmit} data-testid="submit-button">Submit</button>
      {greeting && <p data-testid="greeting-message">{greeting}</p>}
    </div>
  );
};

export default App;
