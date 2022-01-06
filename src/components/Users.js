import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Users.css';
import CreateUser from './CreateUser.js';

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
            <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" aria-label="basic tabs example">
                <Tab label="CREATE USER" />
                <Tab label="LIST USERS" />
            </Tabs>
            <TabContent value={tabValue} index={0}>
                <CreateUser />
            </TabContent>
            <TabContent value={tabValue} index={1}>
                Item Two
            </TabContent>
        </div>
    )
}

export default Users
