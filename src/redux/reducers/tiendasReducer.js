import {GET_TIENDAS_SUCCESS} from '../actions/tiendasActions';

function tiendasReducer(state=[], action){
    switch(action.type){


        case GET_TIENDAS_SUCCESS:
            return [...state, action.tienda];

        default:
            return state;
    }
}

export default tiendasReducer;