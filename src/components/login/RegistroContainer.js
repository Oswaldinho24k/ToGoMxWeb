import React, {Component} from 'react';
import {RegistroDisplay} from "./RegistroDisplay";
import {registrarTienda} from '../../firebase';
import toastr from 'toastr';

class RegistroContainer extends Component{

    state = {
        modalOpen:false,
        tienda:{
            lat:20.1324695,
            lng:-98.8009663,
            title:"",
            responsable:"",
            errores:{},
            email:"",
            email2:"",
            password:"",
            password2:"",
            tipo:"tienda"
        }
    };

    onDrag = (e) => {
let tienda = this.state.tienda;
       tienda.lat = e.latLng.lat();
        tienda.lng = e.latLng.lng();
        this.setState({tienda});
        console.log(this.state.tienda);


     //   console.log(this.state.tienda);
       // console.log(e);
    };

    handleMapOpen = () => {
        this.setState({modalOpen:true});
    };

    handleClose = () => {
        this.setState({modalOpen: false});
    };

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let tienda = this.state.tienda;
        tienda[field] = value;
        //borramos errores
        tienda["errores"] = {};
        this.setState({tienda});
        //console.log(tienda);
    };

    handleTipo = (e, i, v) => {
        let tienda = this.state.tienda;
        tienda["tipo"] = v;
        this.setState({tienda});
        console.log(tienda);
    };

    validate = (e) => {
        e.preventDefault();
        let tienda = this.state.tienda;
        if(tienda.email !== tienda.email2) tienda.errores["email"] = "Los correos electronicos no coinciden";
        if(tienda.password !== tienda.password2) tienda.errores["password"] = "Las contraseñas no coinciden";
        //si pasa la validacion:
        if(Object.keys(tienda.errores).length === 0) this.registratTienda(tienda);
        this.setState({tienda});
    };

    registratTienda = (tienda) => {
        registrarTienda(tienda)
            .then(r=>toastr.success("Se creó tu usuario y tienda"))
            .catch(e=>{
                toastr.error("Algo malo pasó", e);
                console.log(e);
            })
    };

    render(){
        const {modalOpen, tienda} = this.state;
        return(
            <RegistroDisplay
                tienda={tienda}
                {...tienda}
                handleMapOpen={this.handleMapOpen}
                open={modalOpen}
                handleClose={this.handleClose}
                onDrag={this.onDrag}
                onChange={this.onChange}
                handleTipo={this.handleTipo}
                onSubmit={this.validate}
            />
        );
    }
}

export default RegistroContainer;