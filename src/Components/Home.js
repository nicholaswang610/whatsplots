import React, {Component} from 'react';
import ActivityMap from './Map';
import '../Styles/Headings.css';
import '../Styles/Buttons.css';
import {ReactComponent as CreateButton} from './icons/CreateNew.svg';
import {ReactComponent as RewindButton} from './icons/Rewind.svg';
import {ReactComponent as NoButton} from './icons/No.svg';
import {ReactComponent as YesButton} from './icons/Yes.svg';
import {ReactComponent as MaybeButton} from './icons/Maybe.svg';
import Navbar from './NavBar';

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <div className="home-heading"> 
                    <div className="heading-text">Confirm Plans</div>
                    <CreateButton></CreateButton>
                </div>
                <ActivityMap/>
                <div className="buttons">
                    <RewindButton></RewindButton>
                    <NoButton></NoButton>
                    <YesButton></YesButton>
                    <MaybeButton></MaybeButton>
                </div>
                <Navbar></Navbar>
            </div>
        );
    }
}

export default Home;