import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState(""); // State to store the user's name
  const [greeting, setGreeting] = useState(""); // State to store the greeting message

  // Function to handle input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (name.trim() === "") {
      // If the input is empty, show an error message
      setGreeting("Please enter your name.");
    } else {
      // Otherwise, display the personalized greeting
      setGreeting(`Hello,${name}!`);
    }
  };

  return (
    <div>
      {/* Input field for the user's name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        data-testid="name-input" // Add a test ID for testing
      />
      
      {/* Submit button */}
      <button onClick={handleSubmit} data-testid="submit-button">Submit</button>

      {/* Display the greeting or error message */}
      {greeting && <p data-testid="greeting-message">{greeting}</p>}
    </div>
  );
};

export default App;
