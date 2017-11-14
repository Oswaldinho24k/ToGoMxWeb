import firebase from '../../firebase';



export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';

export function getAllProductsSuccess(product){
    return{
        type:GET_ALL_PRODUCTS_SUCCESS, product
    }
}

export function getAllProducts() {
    return function(dispatch, getState){
        firebase.database().ref('products').on('child_added', snap=>{
            let p = snap.val();
            p["key"] = snap.key;
            dispatch(getAllProductsSuccess(p));
        })
    }
}

export const ADD_NEW_PRODUCT_SUCCESS = 'ADD_NEW_PRODUCT_SUCCESS';

export function addNewProductSuccess(product){
    return{
        type:ADD_NEW_PRODUCT_SUCCESS, product
    }
}

export function addNewProduct(product){
    return function(dispatch, getState){
        return firebase.database().ref('products').push(product)
            .then(r=>{
                product["key"] = r.key;
                dispatch(addNewProductSuccess(product))
            })
    }
}