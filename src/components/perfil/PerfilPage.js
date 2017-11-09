//import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PerfilDisplay} from './PerfilDisplay';
import firebase from '../../firebase';



function mapStateToProps(state, ownProps) {
    //const user = localStorage.getItem("user");
    //debugger;
    //if(!user) ownProps.history.push("/login?next=/perfil");
    firebase.auth().onAuthStateChanged(user=>{
        if(!user){
            ownProps.history.push("/login?next=/perfil");
        }
    });
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

const PerfilPage = connect(mapStateToProps, mapDispatchToProps)(PerfilDisplay);
export default PerfilPage;