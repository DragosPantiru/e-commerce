import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "./SideBar.scss";
import ListItems from './ListItems';

const categories = [
    // 

    { id: crypto.randomUUID(), name: "Novels", genre: "Novels" },
    { id: crypto.randomUUID(), name: "History books", genre: "History" },
    { id: crypto.randomUUID(), name: "Detective books", genre: "Detective" },
    { id: crypto.randomUUID(), name: "Poetry books", genre: "Poetry" },
    { id: crypto.randomUUID(), name: "Biography books", genre: "Biography" },
    { id: crypto.randomUUID(), name: "Religious books", genre: "Religious" },
    { id: crypto.randomUUID(), name: "Knowledge books", genre: "Knowledge" },
];

function SideBar({ onCategoryChange }) {
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
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
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

    React.useEffect(() => {
        // Call onCategoryChange for all categories when the component mounts
        categories.forEach(category => onCategoryChange(category.genre, true));
    }, [onCategoryChange]);

    const handleCheckboxChange = (genre, isChecked) => {
        onCategoryChange(genre, isChecked);
    };

    return (
        <div className='container1'>
            <Search className="searchInput">
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search categories and..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <span className='title'>Popular Categories</span>
            <div className="categories">
                {categories.map((category) => (
                    <ListItems
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        genre={category.genre}
                        onCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default SideBar;