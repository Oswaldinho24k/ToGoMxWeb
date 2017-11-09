import {combineReducers} from 'redux';
import alertasReducer from './alertasReducer';
import tiendasReducer from "./tiendasReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    alertas:alertasReducer,
    tiendas:tiendasReducer,
    user: userReducer
});

export default rootReducer;