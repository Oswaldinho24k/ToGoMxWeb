import firebase from '../../firebase';
import {misTiendasWatcher} from '../../watchers';


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

export function getNotificationsSuccess(notification){
    return{
        type:GET_NOTIFICATIONS_SUCCESS, notification
    }
}

export function getNotifications(tienda){
    return function(dispatch, getState){
        console.log("listener")
        const userUid = firebase.auth().currentUser.uid;
        //if(userUid===undefined)return
        return firebase.database().ref("notifications")
            .orderByChild("tiendaId")
            .equalTo(tienda.firebaseKey)
            .on('child_added', snap=>{
                console.log(snap.val())
                        let n = snap.val();
                        n['key']=snap.key;
                        console.log('the snap',n);
                        if (!n.visto){
                            dispatch(getNotificationsSuccess(n))
                        }

                    },e => {
                        console.log(e);
                    });


    }
}

export const MARK_AS_READ = 'MARK_AS_READ';

export function markAsReadSuccess(notification) {
    return {
        type: MARK_AS_READ,
        notification
    }
}

export function markAsRead(notification) {
    return function (dispatch, getState) {
        let updates = {};
        let notificationRead = notification;
        notificationRead['visto'] = true;
        updates['/notifications/'  +  notification.key] = notificationRead;
        return firebase.database().ref().update(updates)
            .then(()=>{
                //console.log('chet');
                dispatch(markAsReadSuccess(notificationRead));
            });
    }
}