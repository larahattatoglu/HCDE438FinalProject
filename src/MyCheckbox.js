import { Checkbox } from "@mui/material"
import { FormControlLabel } from "@mui/material"
import { FormGroup } from "@mui/material"
import * as React from 'react';

export default function MyCheckbox(props) {
    return (
    <FormGroup>
        {props.messages.map((msg)=>{
                return <FormControlLabel control={<Checkbox/>} label={msg} 
                 />
                 
              })}

    </FormGroup>
    );
}