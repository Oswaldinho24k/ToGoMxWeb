import firebase from '../../firebase';

let db;
let userId;
let userRef;
let tiendasRef;

function createRefs(){
    db = firebase.database().ref();
    userId = firebase.auth().currentUser.uid;
    userRef = firebase.database().ref("users").child(userId).child("tiendas");
    tiendasRef = firebase.database().ref("tiendas");
}

export const STOCK_ADD_ONE_SUCCESS = "STOCK_ADD_ONE_SUCCESS";
export const GET_ACTUAL_STOCK_ITEM = "GET_ACTUAL_STOCK_ITEM";

function stockAddOneSuccess(payload){
    return {
        type:STOCK_ADD_ONE_SUCCESS,
        payload
    }
}

function getActualStockItem(payload){
    return {
        type:GET_ACTUAL_STOCK_ITEM,
        payload
    }
}

export const stockAddOne = (product, tiendaId) => (dispatch, getState) => {
    createRefs();
    const productRef = tiendasRef.child(tiendaId).child("products").child(product.key);
    return productRef.once("value")
        .then(s=>{
            let val = s.val() + 1;
            let updates = {
              [`/tiendas/${tiendaId}/products/${product.key}`]:val
            };
            return db.update(updates)
                .then(r=>{
                    dispatch(stockAddOneSuccess({productId:product.key, val}));
                    return Promise.resolve(r);
                });

        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e.message);
        });
};

