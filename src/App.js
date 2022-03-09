import './App.css';
import FirstPage from './FirstPage.js';
import { useState } from 'react';
import React from 'react';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';
/*import './Background.css'; */





function App() {
  const [page, setPage] = useState(1)
  const [goal, setGoal] = useState('');
  const [messages,setMessages] = useState([]);
  

  
  function pageGenerator () {
    if (page === 1) {
    return <FirstPage afterFirstPage = {setPage} setGoal = {setGoal} goal = {goal} />
    }
    else if (page === 2) {
      return <SecondPage afterFirstPage = {setPage} setMessages = {setMessages} messages = {messages}/>
    }
    else if (page === 3) {
      return <ThirdPage afterFirstPage = {setPage} goal = {goal} setMessages = {setMessages} messages = {messages}/>
    }
   
  }
    return (
     
      pageGenerator()
     
    )


}
  

export default App;
