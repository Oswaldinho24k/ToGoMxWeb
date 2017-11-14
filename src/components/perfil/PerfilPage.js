import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PerfilDisplay} from './PerfilDisplay';
import firebase from '../../firebase';
import {misTiendasWatcher} from '../../watchers';


class PerfilPage extends Component{
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                this.props.history.push("/login?next=/perfil");

            }else{
                const userUid = firebase.auth().currentUser.uid;
                const userRef = firebase.database().ref("users").child(userUid);
                misTiendasWatcher(userRef);
            }

        });

    }

    render(){
        if(!this.props.fetched) return <h2>Cargando...</h2>;
        return(
            <PerfilDisplay {...this.props} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        ...state.user,
        fetched:Object.keys(state.user).length > 0 && state.user.tiendas !== undefined
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default PerfilPage = connect(mapStateToProps, mapDispatchToProps)(PerfilPage);
