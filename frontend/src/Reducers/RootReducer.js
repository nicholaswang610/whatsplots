import {combineReducers} from 'redux';
import MiscReducer from './MiscReducer';
import MapReducer from './MapReducer';

const rootReducer = combineReducers({
    misc: MiscReducer,
    map: MapReducer
});

export default rootReducer;
