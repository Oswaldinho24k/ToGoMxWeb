import {LOG_IN_SUCCESS} from '../actions/userActions';

export function userReducer(state={}, action){
    switch(action.type){
        case LOG_IN_SUCCESS:
            return action.user;
        default:
            return state
    }
}