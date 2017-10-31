import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';
import firebase from '../../firebase';
import toastr from 'toastr';

class LoginContainer extends Component{

    state = {
        loading:false,
        auth:{
            email:'',
            password:''
        }
    };

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.props.history.push("/inventario");
            }
        })
    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let auth = this.state.auth;
        auth[field] = value;
        this.setState({auth});
    };

    onLogin = () => {
        const auth = this.state.auth
        this.setState({loading:true});
        firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
            .then(()=>{
                toastr.success("Bienvenido");
                this.props.history.push("/inventario");
            })
            .catch(e=>{
                console.log(e);
                toastr.error("algo malo pasó ",e);
                this.setState({loading:false});
            });
    };

    render(){
        const {auth, loading} = this.state;
        return(
            <LoginDisplay
                {...auth}
                loading={loading}
                onLogin={this.onLogin}
                onChange={this.onChange}
            />
        );
    }
}

export default LoginContainer;