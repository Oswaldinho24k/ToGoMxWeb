import firebase from '../../firebase';

//read notifications
export const GET_TIENDAS_SUCCESS = 'GET_TIENDAS_SUCCESS';
export const ADD_TIENDA_TO_PROFILE_SUCCESS = "ADD_TIENDA_TO_PROFILE_SUCCESS";
export const REMOVE_TIENDA_FROM_PERFIL = "REMOVE_TIENDA_FROM_PERFIL";

export function getTiendasSuccess(tienda){
    return{
        type:GET_TIENDAS_SUCCESS, tienda
    }
}

export function getTiendas(){
    return function(dispatch, getState){
        console.log('me ejecuto');
        return firebase.database().ref('tiendas')
            .on('child_added', snap=>{
                let n = snap.val();
                n['key']=snap.key;
                console.log('the snap',n);

                dispatch(getTiendasSuccess(n))


            },e => {
                console.log(e);
            })
    }
}
