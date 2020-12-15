const initState = {
    locationObject: null,
    locationPicture: null,
    locationError: null,
    loading: false
}

const MapReducer = (state=initState, action) => {
    switch(action.type) {
        case 'CLOSE_FORM': 
            return({
                ...state,
                locationObject: null,
                locationError: null
            })
        case 'LOADING_START':
            return({
                ...state,
                loading: true
            })
        case 'LOC_DATA':
            return({
                ...state,
                locationObject: action.data.data.response,
                locationError: null,
                loading: false
            })
        case 'LOC_PIC':
            return({
                ...state,
                locationPicture: action.data,
                locationError: null,
                loading: false
                
            })
        case 'LOC_ERROR':
            return({
                ...state,
                locationObject: null,
                locationError: action.err
            })
        default: 
            return state;
    }
}

export default MapReducer;