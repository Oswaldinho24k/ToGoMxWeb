import {ListWatcher} from "./index";
import firebase from '../firebase';
import {store} from '../index';
import {ADD_TIENDA_TO_PROFILE_SUCCESS, REMOVE_TIENDA_FROM_PERFIL} from "../redux/actions/tiendasActions";
import {GET_ACTUAL_STOCK_ITEM} from "../redux/actions/stockActions";

const db = firebase.database().ref();

export const misTiendasWatcher = (userRef) => {
    const watchObject =  {
        dbRef: db.child("tiendas"),
        keyPath: 'tiendas',
        actions: {
            agregar: tienda => store.dispatch({type: ADD_TIENDA_TO_PROFILE_SUCCESS, tienda}),
            remove: key => store.dispatch({type: REMOVE_TIENDA_FROM_PERFIL, key})
        }
    };

    const w = new ListWatcher();

    return w.watchList(userRef.child(watchObject.keyPath), watchObject);
};

export const productosStockWatcher = (tiendaId) => {
    firebase.database().ref("tiendas").child(tiendaId).child("products").on("value", s=>{
        //console.log(s.key);
        if(!s.val()) return;
        let item = s.val();
        item["key"] = s.key;
        store.dispatch({
            type: GET_ACTUAL_STOCK_ITEM,
            item
        })
    })
};