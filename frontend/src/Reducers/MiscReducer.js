const initState = {
    showForm: false
}

const MiscReducer = (state=initState, action) => {
    switch(action.type) {
        case 'SHOW_FORM':
            return ({
                ...state,
                showForm: true
            });
        case 'CLOSE_FORM':
            return ({
                ...state,
                showForm: false
        });
        default: 
            return state;
    }
}

export default MiscReducer;