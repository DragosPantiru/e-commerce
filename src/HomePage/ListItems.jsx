import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import "./SideBar.scss";

function ListItems({ id, name, genre, onCheckboxChange }) {
    const [checked, setChecked] = React.useState(true); // Set initial state to true

    const handleChange = (event) => {
        setChecked(event.target.checked);
        onCheckboxChange(genre, event.target.checked);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <label className="categorie">
            <Checkbox
                checked={checked}
                onChange={handleChange}
                {...label}
            />
            <span>{name}</span>
        </label>
    );
}

export default ListItems;