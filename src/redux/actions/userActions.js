import firebase from '../../firebase';
import {getNotifications} from "./notificationActions";
//import toastr from 'toastr';
//import alertify from 'alertify.js';


export function iniciarSesionAction(usuario) {
    return {type:"INICIAR_SESION" , usuario};
}

export function cerrarSesionAction(usuario) {
    return { type:"CERRAR_SESION" , usuario };
}

export function comprobarUsuarioAction(usuario) {
    return { type:"COMPROBAR_USUARIO", usuario};
}

export function comprobarUsuarioSuccess(usuario) {
    return function (dispatch) {
        dispatch( comprobarUsuarioAction(usuario));
        return Promise.resolve();
    }
}

export function iniciarSesion(user) {
    return function(dispatch, getState) {
        // console.log(user)
        return firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((u) => {
                dispatch(iniciarSesionAction(u));
            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = '';
                if (errorCode === 'auth/user-not-found') {
                    errorMessage = 'Usuario no encontrado';
                } else if (errorCode === 'auth/wrong-password') {
                    errorMessage = 'La contraseña es inválida';
                }

                console.log('Algo estuvo mal ',error );
            });

    }
}

export function registrarEIniciarSesion(user) {
    return function (dispatch, getState) {
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((u) => {
                actualizarPerfil(u);
                iniciarSesion(user);

                //this.props.history.push('/login');
            })
            .catch(function(error) {
                //var errorCode = error.code;
                let errorMessage = error.message;
                console.log('something wrong ' + errorMessage);
            });
    }
}

export function actualizarPerfil (user) {
    return function (dispatch, getState) {
        let userFirebase = firebase.auth().currentUser;
        let fullname = user.fullName;
        userFirebase.updateProfile({
            displayName: fullname,
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then( () => {
            console.log('Perfil actualizado');
        }, error => {
            console.error(error);
        });
    }
}



export function cerrarSesion() {
    return function (dispatch,getState) {
        return firebase.auth().signOut()
            .then( (r) => {
                console.log('Ya sali ', r);
                dispatch(cerrarSesionAction({}));
            }).catch( (error) => {
                console.error('No pude salir');
            });

    }
}

export function comprobarUsuario(){
    return function (dispatch, getState) {
        return firebase.auth().onAuthStateChanged((u) => {
            if(u){
                dispatch(comprobarUsuarioAction(u));
                dispatch(getNotifications());
            }else{

            }
        });
    }
}