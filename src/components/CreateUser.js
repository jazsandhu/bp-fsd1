import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './CreateUser.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//material ui theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#5F30F0',
        },
    },
});

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    //apply setState to targeted field onChange
    function handleInputChange(event) {
        switch (event.target.name) {
            case "name":
                setName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "phone":
                setPhone(event.target.value);
                break;
            case "address":
                setAddress(event.target.value);
                break;
            default:
                break;
        }
    }

    //bundle data to POST to API/save 
    function handleSubmit(event) {
        event.preventDefault();
        const POSTurl = 'https://r41eck9sxb.execute-api.us-east-1.amazonaws.com/dev/save';
        const POSTparameters = {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                name: name,
                email: email,
                phone: phone,
                address: address,
            },
            method: "POST"
        }
        fetch(POSTurl, POSTparameters)
            .then((data) => {
                return data.json();
            })
            .then(res => {
                console.log(res);
            })
    }

    //display form
    return (
        <div id="createUser__form">
            <ThemeProvider theme={theme}>
                <div className="createUser__formContainer">
                    <TextField
                        onChange={handleInputChange}
                        fullWidth
                        label="Name"
                        name="name"
                        variant="filled"
                        color="secondary"
                        type="text"
                    />
                </div>
                <div className="createUser__formContainer">
                    <TextField
                        onChange={handleInputChange}
                        fullWidth
                        label="Email"
                        name="email"
                        variant="filled"
                        color="secondary"
                        type="email"
                    />
                </div>
                <div className="createUser__formContainer">
                    <TextField
                        onChange={handleInputChange}
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        variant="filled"
                        color="secondary"
                        type="text"
                    />
                </div>
                <div className="createUser__formContainer">
                    <TextField
                        onChange={handleInputChange}
                        fullWidth
                        label="Address"
                        name="address"
                        variant="filled"
                        color="secondary"
                        type="text"
                        InputProps={{
                            endAdornment: (
                                <Button>
                                    <SearchIcon color="secondary" id="createUser__form__addressSearchButton" />
                                </Button>
                            )
                        }}
                    />
                </div>
                <div id="createUser__form--buttons">
                    <Button variant="contained" color="secondary" type="submit" onClick={handleSubmit}>Save</Button>
                    <Button variant="outlined" color="secondary">Delete</Button>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default CreateUser
