
import React from 'react';
import './App.css'
import './FirstPage.js'
import MyCheckbox from './MyCheckbox';



export default function ThirdPage(props) {

    return (
    
            <div className="App">
            <div className = 'content'>
                <header className="header"> 
                </header>
                <h1 style = {{fontWeight: 'normal'}}>Your To-Do List </h1>
                
                <div>
                
                Your goal was to: 
                <span style ={{fontWeight:'bolder', fontSize:'large'}}> {props.goal}</span>
                </div>
                <div className='whitewrap' >
                <h4 style ={{fontWeight: 'normal',marginTop:'1rem', marginBottom: '1rem'}}>Action items to achieve this goal</h4>
                <hr style ={{marginTop:'0'}}></hr>
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