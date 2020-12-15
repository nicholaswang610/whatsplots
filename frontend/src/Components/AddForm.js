import React, {Component} from 'react';
import '../Styles/AddForm.css';
import {connect} from 'react-redux';
import searchIcon from './icons/Search.png';
import {ReactComponent as Confirm} from './icons/Confirm.svg';
import '../Styles/Buttons.css';
import {getLocation, getPicture} from '../ActionCreators/MapActions';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",           
            title: "",             
            description: "",
            locationFinal: null
        };
    }
    /**
     * Whenever a new location is submitted into the search bar.
     * Loads top 5 results returned by Google Places API 
     */
    handleLocationSubmit = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            locationFinal: null
        })
        this.props.setLoading();
        this.props.getLocation({location: this.state.location, title: this.state.title, description: this.state.description});
    }

    /**
     * Handling user input
     */
    handleTitleChange = e => {
        this.setState({
            ...this.state,
            title: e.target.value,
            
        });
    }

    handleLocationChange = e => {
        this.setState({
            ...this.state,
            location: e.target.value
        });
    }

    handleDescChange = e => {
        this.setState({
            ...this.state,
            location: e.target.value
        })
    }

    /**
     * Loads the array of location results as DOM elements
     * @param {locations[]} locationsArray 
     */
    loadSearch = (locationsArray) => {
        let locationsToDOM;
        if(locationsArray.length < 5) {
            locationsToDOM = locationsArray.slice(0, locationsArray.length);
        } else {
            locationsToDOM = locationsArray.slice(0, 5);
        }
        locationsToDOM = locationsToDOM.map(location => {
            return( 
                /* Set final loc. object, and send to the redux store.  Also, need to swap out info-panel for panel of final location*/
                <div onClick={e=>{this.finalizeLocation(location)}} className='location-option' key={location.reference}>
                    <div className='location-identifier'>
                        <div className='location-name'>{location.name}</div>
                        <div className='location-address'>{location.formatted_address}</div>
                    </div>
                    {location.rating ? (<div className="location-review">{location.rating + "/5"}</div>) : null}
                </div>
            );
        })
        return locationsToDOM;
    }

    /**
     * Sets the user's final choice
     */
    finalizeLocation = (location) => {
        console.log(location);
        this.props.setLoading();
        this.setState({
            ...this.state,
            locationFinal: location  
        })
        if(location.photos) {
            this.props.getPicture(location.photos[0].photo_reference);
        } else {
            this.props.noPicture();
        }
    }


    handleSubmit = e => {

    }

    render() {
        return(
            <div className="add-form">
                <div className="close-form" onClick={this.props.closeForm}>Cancel</div>
                <div className="activity-location">
                    <form className="location" onSubmit={this.handleLocationSubmit}>
                        <input onChange={this.handleLocationChange} id="location" type="text" placeholder="Location or address..." autoComplete='off'></input>
                        <input className="search-icon" type="image" alt="Submit" value="Submit" src={searchIcon}></input>
                    </form>
                </div>
                {/** Three different states/props determine what is shown on the info panel: 
                 * 1. isLoading: still awaiting a response from the Google API
                 * 2. locationData: response was returned from the Google API
                 * 3. locationFinal: user chose a final location
                */}
                {this.props.isLoading && !this.props.locationError ? (<div className='info-panel'><p className='location-option'>Loading...</p></div>) : (null)}
                {this.props.locationError ? <div className='info-panel'><p className='location-option'>{this.props.locationError}</p></div> : (null)}
                {this.props.locationData && !this.state.locationFinal && !this.props.isLoading ? (<div className="info-panel">{this.loadSearch(this.props.locationData)}</div>) : null}
                {this.state.locationFinal && !this.props.isLoading ? (<div className='info-panel' ><img src={`data:image/*;base64,${this.props.locationPicture}`} alt="Image from Google"></img></div>):(null)}
                <div className="activity-title">
                    <form className="title">
                        <input onChange={this.handleTitleChange} id="title" type="text" placeholder="Title..." ></input>
                    </form>
                </div>
                <div className="activity-description">
                    <form className="description">
                        <textarea onChange={this.handleDescChange} id="description" placeholder="Short description..." maxLength="200"></textarea>
                    </form>
                </div>
                <div className="activity-confirm">
                    <Confirm onClick={this.handleSubmit} className="confirm"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        showForm: state.misc.showForm,
        locationData: state.map.locationObject,
        locationError: state.map.locationError,
        isLoading: state.map.loading,
        locationPicture: state.map.locationPicture
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        closeForm: ()=>{dispatch({type: "CLOSE_FORM"})},
        getLocation: (locationObj)=>{dispatch(getLocation(locationObj))},
        setLoading: ()=>{dispatch({type: "LOADING_START"})},
        getPicture: (photoReference)=>{dispatch(getPicture(photoReference))},
        noPicture: ()=>{dispatch({type: "LOC_ERROR", err: "Error: No picture found"})}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);