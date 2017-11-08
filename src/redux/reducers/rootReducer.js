import {combineReducers} from 'redux';
import alertasReducer from './alertasReducer';

const rootReducer = combineReducers({
    alertas:alertasReducer
});

export default rootReducer;