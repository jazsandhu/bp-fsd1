import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Users.css';
import CreateUser from './CreateUser.js';
import ListUsers from './ListUsers';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

//display appropriate content based on active tab
function TabContent(props) {
    return (
        <div>
            {props.value === props.index && (
                <div>
                    <p>{props.children}</p>
                </div>
            )}
        </div>
    );
}

function Users() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className='usersContainer'>
            <ThemeProvider theme={theme}>
                <Tabs id='tabNaviation' indicatorColor="primary" value={tabValue} onChange={handleTabChange} variant="fullWidth" aria-label="basic tabs example">
                    <Tab color="secondary" label="CREATE USER" />
                    <Tab color="secondary" label="LIST USERS" />
                </Tabs>
                <TabContent value={tabValue} index={0}>
                    <CreateUser />
                </TabContent>
                <TabContent value={tabValue} index={1}>
                    <ListUsers />
                </TabContent>
            </ThemeProvider>
        </div>
    )
}

export default Users
