import React, {useState} from 'react';
import '../Styles/AddForm.css';
import {connect} from 'react-redux';
import searchIcon from './icons/Search.png';

const AddForm = (props) => {
    let [address, changeAddress] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(address);
    }
    const handleChange = e => {
        changeAddress(e.target.value);
    }

    return(
        <div className="add-form">
            <div className="close-form" onClick={props.closeForm}>Cancel</div>
            <div className="form-container">
                <form className="address" onSubmit={handleSubmit}>
                    <input onChange={handleChange} id="address" type="text" placeholder="Location or address..."></input>
                    <input className="search-icon" type="image" alt="Submit" value="Submit" src={searchIcon}></input>
                </form>
                
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return({
        showForm: state.misc.showForm
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        closeForm: ()=>{dispatch({type: "CLOSE_FORM"})}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);