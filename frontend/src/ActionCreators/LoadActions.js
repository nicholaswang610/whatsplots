const loadUserPos = () => {
    return(async dispatch => {
        if(navigator.geolocation) {
            let position = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((pos) => {
                    resolve(pos.coords);
                });
            });
            let coordinates = await position.coords;
            dispatch({type: 'LOAD_USER_POS', coords: coordinates});
            
        } else {
            dispatch({type:'LOAD_USER_POS_ERR', err: 'Device does not have geolocation enabled'});
        }
    });
}

export {loadUserPos};