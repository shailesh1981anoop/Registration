import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function TextboxValidation() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleInputChange = (e) => {
        debugger;
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Validate input
        validateInput(name, value);
    };
    const validateInput = (name, value) => {
        debugger;
        // Simple validation example: Require a minimum of 3 characters for the username
        if (name === 'username' && (value !== "")) {
            setErrors({ ...errors, username: '' });
        } else {
            setErrors({ ...errors, username: 'Please Enter Username' });
        }
    };
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        // Perform form submission if there are no validation errors
        console.log(errors.username);
        if (formData.username !== "") {
            // Add your logic here to handle the form submission (e.g., send data to a server)

            // For now, let's log the form data to the console
            console.log('Form Data Submitted:', formData);
        } else {
            //console.log('Form has validation errors. Please correct them.'); 
            setErrors({ ...errors, username: 'Please Enter Username' }); // added by me
        }
    };
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
    ]
    return (
       
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch'},
        }}
        noValidate
        autoComplete="off"
      >
            <div>
                <TextField type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Enter User Name"
                    onChange={handleInputChange}
                    required
                    label="username"
                    variant="outlined"
                ></TextField>
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
           
                <TextField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    label="email"
                    variant="outlined"
                />
            
                <TextField
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    label="password"
                    variant="outlined"
                />
               <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
    //   sx={{ width: '50ch' }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
           </div>
            <Button variant="contained" type="submit" onClick={handleSubmit} > Register</Button >
            
        </Box>
    )
}

//export default TextboxValidation