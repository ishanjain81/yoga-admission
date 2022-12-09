import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function Home() {
    const [slot, setSlot] = React.useState('');

    const handleChange = (event) => {
        setSlot(event.target.value);
    };
  return (
    <div className="home-page">
        <div>
            <TextField id="outlined-error-helper-text" label="First Name" margin='normal' required/>
        </div>
        <div>
            <TextField id="outlined-error-helper-text" label="Last Name" margin='normal' required/>
        </div>
        <div>
            <TextField id="outlined-error-helper-text" label="Age" type="number" margin='normal' required/>
        </div>
        <div>
        <FormControl sx={{m: 1, minWidth: 220}}>
            <InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={slot}
                label="Time Slot"
                onChange={handleChange}
            >
                <MenuItem value={"6-7 AM"}>6-7 AM</MenuItem>
                <MenuItem value={"7-8 AM"}>7-8 AM</MenuItem>
                <MenuItem value={"8-9 AM"}>8-9 AM</MenuItem>
                <MenuItem value={"5-6 PM"}>5-6 PM</MenuItem>
            </Select>
        </FormControl>
        </div>
        <div>
            <TextField disabled id="outlined-disabled" label="Amount" defaultValue={500} margin='normal'/>
        </div>
        <div><Button variant="contained">Make Payment</Button></div>
    </div>
  )
}

export default Home