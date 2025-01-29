import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value, () => {
      if (name.trim() !== '') {
        setGreeting(`Hello, ${name}!`);
      } else {
        setGreeting('Please enter your name.');
      }
    });
  };

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
          onChange={handleChange} 
        />
        <button type="submit">Submit</button>
      </form>
      <div data-testid="greeting">{greeting}</div> 
    </div>
  );
};

export default App;
