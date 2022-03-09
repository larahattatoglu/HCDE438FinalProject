import './App.css';
import { useState } from 'react';
import './SecondPage.css';





function TextInput(props) {
    const [action, setAction] = useState('');
    const {sendMessage} = props;
    function click() {
        sendMessage(action)
        setAction('');
    }
 return (
    <div>
        <input 
        id="label-name" name = "label-name" 
        className = "text-input-2"
        value = {action} 
        onChange={(e) => setAction(e.target.value)} />
    
    <button className='add-action' 
        onClick = {click}

    > 
      Add 

       </button>
   </div>

 );
}

export default TextInput;