import './SecondPage.css';
import React from 'react';
import './App.css';
import TextInput from './TextInput.js';
import { useState } from 'react';




export default function SecondPage({afterFirstPage}) {
    const [messages,setMessages] = useState([]);
    function send() {
        afterFirstPage(3);
     }
     function sendMessage(msg) {
       console.log(msg);
       setMessages([msg, ...messages])


     }
  
 
    return (
       
        <div className="App">
        <div className = 'content'>     
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
            
            <div class ='form'>

            <form class = 'email-form'>
           
            
            </form>
            <div className='messages'>
              {messages.map((msg)=>{
                return <div className= 'message'> {msg} </div>
              })}
            </div>
            </div>
            <TextInput sendMessage= {sendMessage}/> 
            <button className = "add" onClick={send}> 
                Next  
              </button>
              </div>
    </div>
   


    );
}