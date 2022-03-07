
import React from 'react';
import './App.css'
import './FirstPage.js'


export default function ThirdPage(messages) {

    return (
        <div className="App">
        <div className = 'content'>
            <header className="header"> 
            </header>
            <h1>Your To-Do List: </h1>
            <div>Your goal was to: <p> {messages}</p> </div>
            </div>
            </div>
    )

}