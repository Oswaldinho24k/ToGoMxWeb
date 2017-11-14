import {combineReducers} from 'redux';
import {
    STOCK_ADD_ONE_SUCCESS,
    GET_ACTUAL_STOCK_ITEM
    } from "../actions/stockActions";

function stock(state={}, action){
    switch(action.type){
        case STOCK_ADD_ONE_SUCCESS:
            return {
                ...state,
              [action.payload.productId]:action.payload.val
            };

        case GET_ACTUAL_STOCK_ITEM:
            return {...state, ...action.item};
        default:
            return state;
    }
}

export const stockReducer = combineReducers({stock});