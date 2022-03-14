import './App.css';
import { useState } from 'react';
import './SecondPage.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';





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
    
  
    <Button variant="outlined" onClick = {click}>Add</Button>
    
   </div>
 
 );
}

export default TextInput;