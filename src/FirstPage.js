import './FirstPage.css';
import { useState } from 'react';
import React from 'react';
import Dropdown from './Dropdown.js'; 



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
    const [text, setText] = useState("");
    
    function send() {
       afterFirstPage(2);
    }

    return (
    
      <div className="App">
        <div className ='content'>
        <header className="header"> 
        </header>
        <div align = "left" className="resizedTextbox">
          <h1> What are your goals? </h1>
       <h4 className='h4'>
        They can be as broad or as specific as you want. 
        They can span over a course of a month or a day. 
        Just anything you would like to achieve write it down!
        </h4>
  
        <form>
        <span>
        <label htmlFor="label-name" style = {{fontWeight: 'bold'}}> What is your goal? </label>
        <input id="label-name" name = "label-name" 
              className = "text-input"
              value = {text} 
              onChange={(e) => setText(e.target.value)}
              />
              
        </span>
        </form>
        
        <Dropdown selectTitle = "Select Timeline For Goal" items = {items} /> 
       
        <button className = "add" onClick={send}> 
                Add Goal  
              </button>
              </div>
        <footer className = "footer" > 
          </footer>
      </div>
      </div>
    
    );
  }
  
    