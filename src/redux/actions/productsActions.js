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

/***************************** Get Product ******************/
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
function getProductsSuccess(products){
    return{
        type:GET_PRODUCTS_SUCCESS,
        products
    }
}
export const getProducts = () => (dispatch, getState)=>{
    fetch('https://togomx.herokuapp.com/products/', {
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(r => {
        if(!r.ok) throw new Error(r.statusText)
        return r.json()
    }).then( response => {
        console.log(response)
        dispatch(getProductsSuccess(response));
        return response;
    })
};

/***************************** Save Product ******************/
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';

function saveProductSuccess(product) {
    return {
        type: SAVE_PRODUCT_SUCCESS,
        product
    }
}

export const saveProduct = (product) => (dispatch, getState) => {
    fetch('https://togomx.herokuapp.com/products/', {
        method: 'post' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then( r => {
        if ( !r.ok ) throw new Error(r.statusText)
        return r.json()
    }).then( response => {
        dispatch(saveProductSuccess(product));
        return response;
    });
};

