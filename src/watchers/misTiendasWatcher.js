import {ListWatcher} from "./index";
import firebase from '../firebase';
import {store} from '../index';
import {ADD_TIENDA_TO_PROFILE_SUCCESS, REMOVE_TIENDA_FROM_PERFIL} from "../redux/actions/tiendasActions";

const db = firebase.database().ref("tiendas");

export const misTiendasWatcher = (userRef) => {
    const watchObject =  {
        dbRef: db,
        keyPath: 'tiendas',
        actions: {
            agregar: tienda => store.dispatch({type: ADD_TIENDA_TO_PROFILE_SUCCESS, tienda}),
            remove: key => store.dispatch({type: REMOVE_TIENDA_FROM_PERFIL, key})
        }
    };
    const w = new ListWatcher();
    return w.watchList(userRef.child(watchObject.keyPath), watchObject);
};