import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './CreateUser.css';

function CreateUser() {
    return (
        <div id="createUser__form">
            <div className="createUser__formContainer">
                <TextField
                    fullWidth
                    label="Name"
                    variant="filled"
                />
            </div>
            <div className="createUser__formContainer">
                <TextField
                    fullWidth
                    label="Email"
                    variant="filled"
                />
            </div>
            <div className="createUser__formContainer">
                <TextField
                    fullWidth
                    label="Phone Number"
                    variant="filled"
                />
            </div>
            <div className="createUser__formContainer">
                <TextField
                    fullWidth
                    label="Address"
                    variant="filled"
                    InputProps={{
                        endAdornment: (
                            <Button>
                                <SearchIcon id="createUser__form__addressSearchButton" />
                            </Button>
                        )
                    }}
                />
            </div>
            <div id="createUser__form--buttons">
                <Button variant="contained" color="secondary">Save</Button>
                <Button variant="outlined">Cancel</Button>
            </div>
        </div>
    )
}

export default CreateUser
