
import React from 'react';
import propTypes from 'react-aria-menubutton/dist/propTypes';
import './App.css'
import './FirstPage.js'
import MyCheckbox from './MyCheckbox';



export default function ThirdPage(props) {

    return (
    
            <div className="App">
            <div className = 'content'>
                <header className="header"> 
                </header>
                <h1>Your To-Do List </h1>
                
                <div>
                
                    Your goal was to: 
                <span style ={{fontWeight:'bolder', fontSize:'large'}}> {props.goal}</span>
                </div>
                <div className='whitewrap' >
                <h4 style ={{marginTop:'1rem', marginBottom: '0'}}>Action items to achieve this goal:</h4>
 
                <div>
                <MyCheckbox messages= {props.messages}/>
                </div>
                
                </div>
                <div style = {{marginTop:'2rem'}}>
                    Time to complete this goal:
                </div>
                </div>
               
               
                </div>
                   
            
    );

}