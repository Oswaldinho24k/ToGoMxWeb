import {CHANGE_BAR_STATUS} from "../actions/barActions";

export function barReducer(state=false, action){
    switch(action.type){
        case CHANGE_BAR_STATUS:
            return action.bar;
        default:
            return state;
    }
}