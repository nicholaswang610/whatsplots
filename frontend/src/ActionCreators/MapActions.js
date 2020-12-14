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

export {getLocation};