import React from 'react';
import {NavLink} from 'react-router-dom';
import "../Styles/Navbar.css";
import {ReactComponent as HomeButton} from './icons/home-icon.svg';
import {ReactComponent as PlotsButton} from './icons/plots-icon.svg';
import {ReactComponent as ProfileButton} from './icons/profile-icon.svg';

const Navbar = (props) => {
    return (
        <div id="navbar-container">
            <div id="button-collection">
                <NavLink exact to="/"><HomeButton className="nav-button"></HomeButton></NavLink>
                <NavLink exact to="/plans"><PlotsButton className="nav-button"></PlotsButton></NavLink>
                <NavLink exact to="/profile"><ProfileButton className="nav-button"></ProfileButton></NavLink>
            </div>
        </div>
    );
}

export default Navbar;