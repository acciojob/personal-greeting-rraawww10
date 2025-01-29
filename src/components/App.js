import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      setGreeting('Please enter your name.');
    } else {
      setGreeting(`Hello, ${name}!`);
    }
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
