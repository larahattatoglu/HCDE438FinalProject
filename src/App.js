import './App.css';
import { useState } from 'react';
import React from 'react';


/*const items = [
  {
    id: 1,
    value: 'today'
  },
  {
    id: 2,
    value: 'end of this week'
  },
  {
    id: 3,
    value: 'end of this month'
  },
];
*/


function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header className="header"> 
      </header>
      <body align = "center" class="resizedTextbox">
        <h1> What are your goals? </h1>
     <h4 className='h4'>
      They can be as broad or as specific as you want. 
      They can span over a course of a month or a day. 
      Just anything you would like to achieve write it down!
      </h4>

      <form>
      <span>
      <label for="label-name"> What is your goal? </label>
      <input id="label-name" name= "label-name" 
            className = "text-input"
            value = {text} 
            onChange={(e) => setText(e.target.value)}
            />
      </span>
      </form>
      
      
      </body>
      <footer className = "footer" > 
        <button className = "add" > 
              Add Goal  
            </button>
        </footer>
    </div>
  );
}

export default App;
