import './App.css';
import FirstPage from './FirstPage.js';
import { useState } from 'react';
import React from 'react';
import SecondPage from './SecondPage.js';




function App() {
  
  const [page, setPage] = useState(1)
  function pageGenerator () {
    if (page == 1) {
    return <FirstPage afterFirstPage = {setPage}/>
    }
    else if (page == 2) {
      return <SecondPage afterFirstPage = {setPage}/>
    }
  }
    return (
      pageGenerator()
    )

    

    
  
  

}
  

export default App;
