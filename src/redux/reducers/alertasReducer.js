import {GET_NOTIFICATIONS_SUCCESS, MARK_AS_READ} from '../actions/notificationActions';

function alertasReducer(state=[], action){
    switch(action.type){
        //case NEW_NOTIFICATION:
          //  return [...state, action.notification];

        case GET_NOTIFICATIONS_SUCCESS:
            return [...state, action.notification];

        case MARK_AS_READ:
            return [...state.filter( notification => {
                return notification.key !== action.notification.key;
            } )];

        default:
            return state;
    }
}

export default alertasReducer;