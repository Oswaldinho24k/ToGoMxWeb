/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {TextField, Paper, SelectField, MenuItem, RaisedButton} from 'material-ui';
import {MapModal} from "./MapModal";

export const RegistroDisplay = ({onChange, errores, title, tienda, onDrag,handleClose, email, password, password2, email2, onSubmit, handleTipo, handleMapOpen, responsable, tipo, direccion, open}) => {
    return (
        <Paper
            zDepth={4}
            style={styles.container}>
            <h2>Completa el formulario</h2>
            <form onSubmit={onSubmit}>
                <h3>Datos del propietario</h3>
                <div style={styles.form} >
                    <TextField
                        onChange={onChange}
                        required
                        value={responsable}
                        className="registro-input"
                        name="responsable"
                        floatingLabelText={"Tu nombre completo"}
                        type="text"
                    />

                    <TextField
                        onChange={onChange}
                        required
                        value={email}
                        className="registro-input"
                        name="email"
                        floatingLabelText={"Tu Correo electrónico"}
                        type="text"
                        errorText={errores.email}
                    />
                    <TextField
                        onChange={onChange}
                        required
                        value={email2}
                        className="registro-input"
                        name="email2"
                        floatingLabelText={"Confirma tu correo"}
                        type="text"
                        errorText={errores.email}
                    />
                    <TextField
                        onChange={onChange}
                        required
                        value={password}
                        className="registro-input"
                        name="password"
                        floatingLabelText={"Crea una contraseña"}
                        type="password"
                        errorText={errores.password}
                    />
                    <TextField
                        onChange={onChange}
                        required
                        value={password2}
                        className="registro-input"
                        name="password2"
                        floatingLabelText={"Confirma tu password"}
                        type="password"
                        errorText={errores.password}
                    />




                </div>
                <h3>Datos de tu negocio</h3>
                <div style={styles.form} >

                    <SelectField
                        className="registro-input"
                        floatingLabelText="Tipo de Negocio"
                        value={tipo}
                        onChange={handleTipo}
                    >
                        <MenuItem default value={"tienda"} primaryText="Tienda" />
                        <MenuItem value={"farmacia"} primaryText="Farmacia" />
                        <MenuItem value={"minisuper"} primaryText="Mini Super" />
                        <MenuItem value={"vineteria"} primaryText="Vinetería" />
                    </SelectField>

                    <TextField
                        onChange={onChange}
                        required
                        value={title}
                        className="registro-input"
                        name="title"
                        floatingLabelText={"Nombre de tu tienda"}
                        type="text"
                    />
                </div>
                <h3>Ubicación de tu negocio</h3>
                <div style={styles.form}>
                    <TextField
                        onChange={onChange}
                        required
                        value={direccion}
                        className="registro-input"
                        name="direccion"
                        floatingLabelText={"Dirección de tu negocio"}
                        multiLine
                        rows={3}
                    />

                    <RaisedButton
                        label="Ubicación en el mapa"
                        onTouchTap={handleMapOpen}
                    />
                </div>

                <br/>
                <RaisedButton
                    type="submit"
                    label={"Crear Mi cuenta"}
                    backgroundColor="orange"
                    labelColor="white"
                />

            </form>


            <MapModal
                tienda={tienda}
                handleClose={handleClose}
                onDrag={onDrag}
                open={open}/>

        </Paper>
    );
};

//RegistroDisplay.propTypes = {};

const styles = {
    container:{
        textAlign:"left",
        maxWidth:"80%",
        margin:"0 auto",
        padding:"40px",
        marginTop:"40px",

    },
    form: {
        display:"flex",
        justifyContent:"flex-start",
        flexWrap:"wrap",
        alignItems:"flex-end"
    }
};

