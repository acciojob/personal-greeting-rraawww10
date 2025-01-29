import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
  if (name.trim() !== '') {
    setGreeting(`Hello, ${name}!`);
  } else {
    setGreeting('Please enter your name.'); // Set greeting to 'Please enter your name.' when name is empty
  }
}, [name]);  // Only re-render when 'name' changes

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      <div data-testid="greeting">{greeting}</div> 
    </div>
  );
};

export default App;
