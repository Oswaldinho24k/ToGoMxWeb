import {GET_NOTIFICATIONS_SUCCESS} from '../actions/notificationActions';

function alertasReducer(state=[], action){
    switch(action.type){
        //case NEW_NOTIFICATION:
          //  return [...state, action.notification];

        case GET_NOTIFICATIONS_SUCCESS:
            return [...state, action.notification];

        default:
            return state;
    }
}

export default alertasReducer;