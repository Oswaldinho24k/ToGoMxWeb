import firebase from '../../firebase';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export function logInSuccess(user){
    return{
        type:LOG_IN_SUCCESS, user
    }
}

export function logInAction(email, pass){
    return function(dispatch, getState){
        return firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((r)=>{
                console.log(r);
                dispatch(logInSuccess(r));

            })
            .catch(e=>{

            });
    }
}