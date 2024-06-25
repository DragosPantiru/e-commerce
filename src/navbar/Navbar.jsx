
import "./Navbar.scss";
import { motion } from "framer-motion"

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NavbarU from "./NavbarU";

const Navbar = ({ menu }) => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '40ch',
                '&:focus': {
                    width: '50ch',
                },
            },
        },
    }));
    return (


        <div className="navbar">
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar className="toolbar">

                        <img src="./Logo.png" alt="" className="logo" />
                        <span className='title'>The Suitcase with books</span>
                        <Search>
                            <SearchIconWrapper >
                                <SearchIcon />
                            </SearchIconWrapper>

                            <StyledInputBase
                                placeholder="Search for the book you want and read it now..."
                                inputProps={{ 'aria-label': 'search' }}
                                className="searchInput"
                            />
                        </Search>


                    </Toolbar>
                </AppBar>
            </Box>

            <NavbarU menu={menu} />


        </div>

    )
}

export default Navbar
