import {combineReducers} from 'redux';
import alertasReducer from './alertasReducer';
import tiendasReducer from "./tiendasReducer";
import userReducer from "./userReducer";
import {productsReducer} from "./productsReducer";
import {barReducer} from "./barReducer";
import {stockReducer} from "./stockReducer";

const rootReducer = combineReducers({
    alertas:alertasReducer,
    tiendas:tiendasReducer,
    user: userReducer,
    products:productsReducer,
    bar:barReducer,
    stock:stockReducer
});

export default rootReducer;