import {ADD_NEW_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_SUCCESS, SAVE_PRODUCT_SUCCESS, GET_PRODUCTS_SUCCESS} from "../actions/productsActions";

export function productsReducer(state=[], action){
    switch(action.type){

        case ADD_NEW_PRODUCT_SUCCESS://FIREBASE
            return [...state];
        case GET_PRODUCTS_SUCCESS://node
            return [...state, ...action.products];
        case GET_ALL_PRODUCTS_SUCCESS://FIREBASE
        case SAVE_PRODUCT_SUCCESS://node
            return [...state, action.product];
        default:
            return state;
    }
}