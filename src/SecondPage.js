import './SecondPage.css';
import React from 'react';
import './App.css';
import TextInput from './TextInput.js';
import { useState } from 'react';





export default function SecondPage(props) {

   
    function send() {
        props.afterFirstPage(3);
     }
     function sendMessage(msg) {
       console.log(msg);
       props.setMessages([msg, ...props.messages]);


     }
    
     /* style={{color:'red', fontWeight:'bold',marginTop:'1.5rem'}} */
    return (
       
        <div className="App">
        <div className = 'content'>     
            <h2 style = {{fontWeight: 'normal'}}>(2/3) How are you going to Eat Healthier? </h2> 
            
            <h3 style = {{fontWeight:'bold', marginTop: '3rem'}}>Add an action that can help you achieve this goal</h3>

            <div style = {{marginBottom:'1.5rem'}}> Make sure your action is <span style ={{fontWeight: 'bold'}}>specific, measurable, and feasible </span></div>
            
            <div className = 'badwrap' > 
              Bad example: Eat more vegetables
              <p style = {{fontWeight:'normal'}}> • No way to measure completion</p>
              <p style = {{fontWeight:'normal'}}> • Not specific (what is “more”? a carrot after dinner? a salad for lunch?)</p>
              </div>
            
           
            <div className = 'goodwrap'>
            <span>Good Example: Add atleast two vegetables to breakfast this week</span>
            <p style = {{fontWeight:'normal'}}> • Measurable</p>
            <p style = {{fontWeight:'normal'}}> • Specific</p>
            <p style = {{fontWeight:'normal'}}> • realistic </p>
            </div>
            <div class ='form'>

            <form class = 'email-form'>
           
            
            </form>
            <div className='messages'>
              {props.messages.map((msg)=>{
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