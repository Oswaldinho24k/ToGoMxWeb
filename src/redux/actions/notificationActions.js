import firebase from '../../firebase';


//Add notifications while app is done
const NEW_NOTIFICATION = 'NEW_NOTIFICATION';

export function newNotificationSuccess(notification){
    return{
        type:NEW_NOTIFICATION, notification
    }
}

export function newNotification(notification){
    return function(dispatch, getState){
        return firebase.database().ref('notifications').push(notification)
            .then(r=>{
                let n = notification;
                n['key']=r.key;
                dispatch(newNotificationSuccess(n))
            })
    }
}

//read notifications

export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS';

export function getNotificationsSuccess(notifications){
    return{
        type:GET_NOTIFICATIONS_SUCCESS, notifications
    }
}

export function getNotifications(){
    return function(dispatch, getState){
        return firebase.database().ref('notifications').orderByChild('tiendaId').equalTo('-KySKSf5kuiiCj_ISqHR').on('child_added', snap=>{
            dispatch(getNotificationsSuccess(snap.val()))
        })
    }
}
