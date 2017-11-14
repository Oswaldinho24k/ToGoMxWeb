import {ADD_NEW_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_SUCCESS} from "../actions/productsActions";

export function productsReducer(state=[], action){
    switch(action.type){
        case ADD_NEW_PRODUCT_SUCCESS:
            return [...state];
        case GET_ALL_PRODUCTS_SUCCESS:
            return [...state, action.product];
        default:
            return state;
    }
}