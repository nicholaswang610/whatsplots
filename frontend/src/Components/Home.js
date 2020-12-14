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

class Home extends Component {
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
                    <RewindButton className="rewind"/>
                    <NoButton className="no"/>
                    <YesButton className="yes"/>
                    <MaybeButton className="maybe"/>
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