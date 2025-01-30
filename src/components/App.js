
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
   const [text, setText ] = useState("");
    const getVal = (e) => {
       const {value} = e.target;
       setText(value);
    }
   const clear = () => {
      setText("");
   }
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input type="text" id="text" onInput={getVal} value={text}/>
      {!!text.length && <p>Hello {text}!</p>}
      <button onClick={clear}>clear</button>
    </div>
  )
}

export default App
