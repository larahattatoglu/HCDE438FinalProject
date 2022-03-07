import './FirstPage.css';
import { useState } from 'react';
import React from 'react';
import Dropdown from './Dropdown.js'; 
import './App.css';
import GoalInput from './GoalInput';


const items = [
    {
      id: 1,
      value: 'Today'
    },
    {
      id: 2,
      value: 'End of this week'
    },
    {
      id: 3,
      value: 'End of this month'
    },
  ];
  
  export default function FirstPage({afterFirstPage}) {
   const [goal,setGoal] = useState("");
    
    function send() {
       afterFirstPage(2);
    }

    function sendGoal(msg) {
      console.log(msg);
      setGoal(msg);
    
    }

    return (
    
      <div className="App">
        <div className ='content'>
        <h1> What are your goals? </h1>
       <h4 className='h4'>
        <div> They can be as broad or as specific as you want.</div> 
        <div>They can span over a course of a month or a day. </div>
        <div>Just anything you would like to achieve write it down!</div>
        </h4>
        <form>
        <span>
        <label htmlFor="label-name" style = {{fontWeight: 'bold'}}> What is your goal? </label>
        <GoalInput sendGoal={sendGoal}/>       
        </span>
        <div>
          {goal}
        </div>
        </form>
        
        <Dropdown selectTitle = "Select Timeline For Goal" items = {items} /> 
       
        <button className = "add" onClick={send}> 
                Add Goal  
              </button>
              </div>
      
      </div>
    
    
    );
  }
  
    