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

    decideRoute = () => {
        const search = this.props.location.search;
        if(search){
            const params = new URLSearchParams(search);
            const next = params.get('next');
            //console.log(next);
            if(next){
                this.routeNext(next);
            }
        } else{
            this.routeNatural();
        }
    };

    routeNext = (next) => {
        this.props.history.push(next);
    };

    routeNatural = () => {
        this.props.history.push("/");
    };

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.decideRoute();
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

    onLogin = (e) => {
        e.preventDefault();
        const auth = this.state.auth;
        this.setState({loading:true});
        firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
            .then(()=>{
                toastr.success("Bienvenido");
                //this.props.history.push("/perfil");
            })
            .catch(e=>{
                console.log(e);
                if(e.message === "There is no user record corresponding to this identifier. The user may have been deleted.") e.message = "Este usuario no existe, crea tu cuenta";
                if(e.message === "The password is invalid or the user does not have a password.") e.message = "Tu contraseña no es correcta";
                toastr.error(e.message);
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