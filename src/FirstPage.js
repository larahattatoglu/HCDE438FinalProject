
import './FirstPage.css';
import { useState } from 'react';
import React from 'react';
import Dropdown from './Dropdown.js'; 
import './App.css';
import GoalInput from './GoalInput';

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';



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
  
  export default function FirstPage(props) {
  
    function send() {
       props.afterFirstPage(2);
    }

   
    

    return (
    
      <div className="App">
        <div className ='content'>
        <h1 style = {{fontWeight: 'normal'}}> Let's Create a SMART Goal! </h1>
        <h4 className='h4'>
        <div> They can be as broad or as specific as you want.</div> 
        <div>They can span over a course of a month or a day. </div>
        <div>Just anything you would like to achieve write it down!</div>
        </h4>
        <form>
        <span>
        <label htmlFor="label-name" style = {{fontWeight: 'bold'}}> What is your goal? </label>
        <GoalInput setGoal = {props.setGoal} goal = {props.goal} />       
        </span>
       <div>
       
       </div>
        </form>
        
        <Dropdown selectTitle = "Select Timeline For Goal" items = {items} setSelection = {props.setSelection} selection = {props.selection}/> 
     

        <Button variant="contained" onClick={send} style = {{marginTop: '2rem'}}>Add Goal</Button>
      
      </div>
      </div>
    
    
    );
  }
  
  