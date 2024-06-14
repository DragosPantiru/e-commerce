import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { color } from 'framer-motion';
const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: 'red',
            secondary: 'blue',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});


export default function NavbarU({ menu }) {
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        // <ThemeProvider theme={theme}>
        <Box
            className="menu"
            sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs
                className='menu'
                value={value}
                onChange={handleChange}

                aria-label="secondary tabs example"
                centered>
                {
                    menu.map((p) => (
                        <Tab className='tab'
                            key={p.id}
                            label={p.name}
                            component={Link}
                            to={p.adress}
                        />
                    ))
                }
            </Tabs>
        </Box >
        // </ThemeProvider>
    );
}