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
            dispatch(getAllProductsSuccess(snap.val()))
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
                dispatch(addNewProductSuccess(product))
            })
    }
}