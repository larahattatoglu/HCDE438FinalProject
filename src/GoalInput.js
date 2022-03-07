import './App.css';
import { useState } from 'react';
import './FirstPage.js';
import './FirstPage.css';


function GoalInput(props) {
    const [text, setText] = useState("");
    const {sendGoal} = props;
    function click() {
        sendGoal(text);
        setText('');
    }
 return (
    <div>
        <input 
        className = "text-input-2"
        value = {text} 
        onChange={(e) => setText(e.target.value)} />
    
    <button  className = 'add-action'
        onClick = {click}

    > 
      Add

       </button>
   </div>

 );
}

export default GoalInput;