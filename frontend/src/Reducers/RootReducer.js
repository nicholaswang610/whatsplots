import {combineReducers} from 'redux';
import MiscReducer from './MiscReducer';

const rootReducer = combineReducers({
    misc: MiscReducer
});

export default rootReducer;
