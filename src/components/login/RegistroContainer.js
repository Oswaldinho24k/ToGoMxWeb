import React, {Component} from 'react';
import {RegistroDisplay} from "./RegistroDisplay";
import {registrarTienda} from '../../firebase';
//import {saveMongoStore} from '../../redux/actions/stockActions';
import toastr from 'toastr';

//const NY = {
  //  lat:20.134484,
    //lng:-98.802704
//};

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
            tipo:"tienda",
            direccion:''
        }
    };

    onDrag = (e) => {
let tienda = this.state.tienda;
       tienda.lat = e.latLng.lat();
        tienda.lng = e.latLng.lng();

        console.log(this.state.tienda);

        const googleMaps = window.google.maps;
        const geocoder = new googleMaps.Geocoder();
        geocoder.geocode({'location': tienda},
            r=>{
            console.log(r);
            tienda.direccion = r[0].formatted_address;
            }
        );
        console.log(geocoder);


        this.setState({tienda});
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
        tienda["coord"] = {latitude:tienda.lat, longitude:tienda.lng};
        tienda["location"] = {
            type:"Point",
            coordinates: [
                tienda.lng, tienda.lat
            ],
            address:tienda.direccion
        };

        registrarTienda(tienda)
            .then(r=>{
                this.saveToMongo(r);
            })
            .catch(e=>{
                if(e.message === "Password should be at least 6 characters") e.message = "Tu password debe contener al menos 6 caracteres";
                if(e.message === "The email address is already in use by another account.") e.message = "Este correo electónico ya está en uso por otro usuario";
                toastr.error(e.message);
                console.log("Error --- ", e.message);
            })
    };

    saveToMongo(tienda){
        const req = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(tienda)
        };
        //console.log("mando: ", req);
        fetch("https://togomx.herokuapp.com/stores/", req)
            .then(response=>{
                if(response.ok)
                    return response.json();
                throw new Error(response.statusText);
            })
            .then(data=>{
                //console.log(data);
                toastr.success("Se creó tu usuario y tienda");
                //this.props.history.push("/inventario");
            })
            .catch(e=>{
                console.log(e);
                toastr.error(e.message);
            });
    }

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