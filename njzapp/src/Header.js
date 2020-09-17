import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from '@material-ui/core/IconButton';
function Header() {
    return (
        <div className="Header">
            <IconButton>
                <AccountCircleIcon color="action" fontSize="large"/>
            </IconButton>
            <IconButton>
                <AddCircleOutlineIcon fontSize="large" color="primary"/>
            </IconButton>
            <IconButton>
                <LoyaltyIcon fontSize="large"color="secondary"/>
            </IconButton>
        </div>
    )
}

export default Header;
