import React, {Component} from 'react';
import {connect} from 'react-redux';
import ActivityMap from './Map';
import '../Styles/Headings.css';
import '../Styles/Buttons.css';
import {ReactComponent as CreateButton} from './icons/CreateNew.svg';
import {ReactComponent as RewindButton} from './icons/Rewind.svg';
import {ReactComponent as NoButton} from './icons/No.svg';
import {ReactComponent as YesButton} from './icons/Yes.svg';
import {ReactComponent as MaybeButton} from './icons/Maybe.svg';
import Navbar from './NavBar';
import AddForm from './AddForm';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';

class Home extends Component {
    componentDidMount() {
        axios.get('/api').then(response=>{console.log(response.data)});
    }
    render() {
        return (
            <div id="home-container">
                <CSSTransition in={this.props.showForm} timeout={150} classNames="add-form" unmountOnExit={true}>
                    <AddForm/>
                </CSSTransition>
                <div className="home-heading"> 
                    <div className="heading-text">Confirm Plans</div>
                    <CreateButton className="create-button" onClick={this.props.openForm}/>
                </div>
                <ActivityMap/>
                <div className="buttons">
                    <RewindButton/>
                    <NoButton/>
                    <YesButton/>
                    <MaybeButton/>
                </div>
                <Navbar/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        showForm: state.misc.showForm
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        openForm: ()=>{dispatch({type: "SHOW_FORM"})}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);