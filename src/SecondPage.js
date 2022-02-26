import './SecondPage.css';
import { useState } from 'react';
import React from 'react';

export default function SecondPage() {
    const [secondtext, setSecondText] = useState("");
    return (
       
        <div className="App">
        <div className = 'content'>
            <header className="header"> 
            </header>
           
            <div align = "left" className= "resizedTextbox" >
            <h1>How are you going to eat healthier?</h1>
            <h3 style = {{fontWeight:'bold'}}>Add an action that can help you achieve this goal</h3>

            <div style = {{marginBottom:'1.5rem'}}> Make sure your action is <span style ={{fontWeight: 'bold'}}>specific, measurable, and feasible </span></div>
            <span style={{color:'red', fontWeight:'bold',marginTop:'1.5rem'}}> Bad example: </span> 
            <span> Eat more vegetables</span>
            <div> • No way to measure completion</div>
            <div style ={{marginBottom: '1.5rem'}}> • Not specific (what is “more”? a carrot after dinner? a salad for lunch?)</div>
            <span style={{color:'green',marginTop:'1.5rem',fontWeight:'bold'}}>Good Example:</span> 
            <span>Add atleast two vegetables to breakfast this week</span>
            <div> • Measurable </div>
            <div> • Specific on duration and quantity  </div>
            <div style = {{marginBottom:'1.5rem'}}> • Feasible </div>
    
            <form>
            <span>
            <label htmlFor="label-name" style = {{fontWeight:'bold'}}> Add Action </label>
            <input id="label-name" name = "label-name" 
              className = "text-input"
              value = {secondtext} 
              onChange={(e) => setSecondText(e.target.value)}
              />
              
            </span>
            </form>
            <button className = "add" > 
                Next  
              </button>
        <footer className = "footer" > 
        </footer>   
    </div>
    </div>
    </div>


    );
}