import React from 'react';
import '../Styles/AddForm.css';
import {connect} from 'react-redux';

const AddForm = (props) => {
    return(
        <div className="add-form">
            <div onClick={props.closeForm}>Cancel</div>
            <div className="form-container">
                <form>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text"></input>
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