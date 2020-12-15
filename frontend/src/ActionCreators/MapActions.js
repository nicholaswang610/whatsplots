import axios from 'axios';

function getLocation(locationObj) {
    return(dispatch => {
        if(locationObj.location.length <= 0) {
            return dispatch({type: "LOC_ERROR", err: "Error: Empty field"});
        }
        
        axios.post('/api/locationdata', locationObj).then(response=>{
            return dispatch({type: "LOC_DATA", data: response});
        });
    });
    
}

function getPicture(photoReference) {
    return(dispatch => {
        axios.post('/api/picture', {photoReference: photoReference}).then(response=> {
            return dispatch({type: "LOC_PIC", data: response.data.response});
        })
    });
}

export {getLocation, getPicture};