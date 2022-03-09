import './App.css';
import { useState } from 'react';
import './FirstPage.css';

//onChange={(e) => setText(e.target.value)} />
function GoalInput(props) {
  
    //initialize as empty string

 
   
 return (
   


     
    <div>
        <input 
        className = "text-input-1"
        inputValue = {props.goal} 
        onChange={(e) => props.setGoal(e.target.value)}
       
        />
    
   
   </div>

 );



}

export default GoalInput;