import {ADD_TIENDA_TO_PROFILE_SUCCESS} from "../actions/tiendasActions";

function tiendas(state=[], action){
    switch(action.type){
        case ADD_TIENDA_TO_PROFILE_SUCCESS:
            return [...state,action.tienda];
        default:
            return state;
    }
}

export default function usuarioReducer ( state = {} , action ){
    switch(action.type){
        case "INICIAR_SESION":
            if (action.user) {
                return action.usuario;
            }else{
                return {};
            }

        case "COMPROBAR_USUARIO":
            if (action.usuario) {
                return action.usuario;
            }else{
                return {};
            }

        case "CERRAR_SESION":
            return  {};

        case ADD_TIENDA_TO_PROFILE_SUCCESS:
            let user = Object.assign({}, state);
            if(user["tiendas"] === undefined) user["tiendas"] = [];
            let tienda = user.tiendas.find(t=>t.firebaseKey === action.tienda.firebaseKey);
            if(tienda) return user;
            user["tiendas"].push(action.tienda);
            return {...user};

        default:
            return state;
    }
}