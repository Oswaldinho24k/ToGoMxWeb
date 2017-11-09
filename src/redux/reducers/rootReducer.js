import {combineReducers} from 'redux';
import alertasReducer from './alertasReducer';
import tiendasReducer from "./tiendasReducer";

const rootReducer = combineReducers({
    alertas:alertasReducer,
    tiendas:tiendasReducer,
});

export default rootReducer;