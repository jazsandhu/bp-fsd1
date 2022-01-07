import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './ListUsers.css';
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

//display user data
function User(props) {
    return (
        <div className='userContainer'>
            <div className='user__infoContainer'>
                <div className='user__name'>
                    {props.data.name}
                </div>
                <div className='user__info'>
                    {props.data.email} | {props.data.phone}
                </div>
                <div className='user__info'>
                    {props.data.address}
                </div>
            </div>
            <div className='user__buttonsContainer'>
                <ThemeProvider theme={theme}>
                    <Button className='user__buttons' color="secondary" variant="outlined">Edit</Button>
                    <Button className='user__buttons' color="secondary" variant="outlined">Delete</Button>
                </ThemeProvider>
            </div>
        </div >
    )
}

function ListUsers() {
    const [usersList, setUsersList] = useState([]);

    //retrieve users list
    useEffect(() => {
        fetch('https://r41eck9sxb.execute-api.us-east-1.amazonaws.com/dev/id')
            .then((res) => {
                //res = readablestream where locked: false
                //this is a response instance, need a conversion method to get data
                return res.json();
            })
            .then((data) => {
                setUsersList(data.body);
            })
    }, []);

    //iterate through usersList and call User to display data
    const listUsers = usersList.map((data, i) => {
        return <User data={data} key={i} />
    });

    //invoke JSX variable to display users data
    return (
        <div>
            {listUsers}
        </div>
    )
}

export default ListUsers
