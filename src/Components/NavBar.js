import React from 'react';
import "../Styles/Navbar.css";
import {ReactComponent as HomeButton} from './icons/home-icon.svg';
import {ReactComponent as PlotsButton} from './icons/plots-icon.svg';
import {ReactComponent as ProfileButton} from './icons/profile-icon.svg';

const Navbar = (props) => {
    return (
        <div id="navbar-container">
            <div id="button-collection">
                <HomeButton className="nav-button"></HomeButton>
                <PlotsButton className="nav-button"></PlotsButton>
                <ProfileButton className="nav-button"></ProfileButton>
            </div>
        </div>
    );
}

export default Navbar;