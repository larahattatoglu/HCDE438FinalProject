import './App.css';
import { useState } from 'react';
import './SecondPage.css';
import './SecondPage.js';




function TextInput(props) {
    const [secondtext, setSecondText] = useState("");
    const {sendMessage} = props;
    function click() {
        sendMessage(secondtext)
        setSecondText('');
    }
   /* let [actions, setActions] = useState([]); */
   /* const handleInput = (text) => {
        const newAction = {
            text: secondtext,
        };
        setActions ([newAction, ...actions])
        console.log(secondtext);
        setSecondText(text);
    }; */


 return (
    <div>
        <input 
        id="label-name" name = "label-name" 
        className = "text-input-2"
        value = {secondtext} 
        onChange={(e) => setSecondText(e.target.value)} />
    
    <button className='add-action' 
        /*onClick = {()=> handleInput() } */
        onClick = {click}

    > 
      Add Action

       </button>
   </div>

 );
}

export default TextInput;