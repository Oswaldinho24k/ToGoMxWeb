/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {RaisedButton, TextField, Card, CircularProgress} from 'material-ui';
import {Link} from 'react-router-dom';

export const LoginDisplay = ({loading=false, email, password, onLogin, onChange}) => {
    return (

        <div style={styles.tabla}>
            <form onSubmit={onLogin} style={styles.centrado}>
                <Card
                    zDepth={5}
                    style={styles.card}>
                    <h2>Inicia Sesión</h2>
                    <div style={styles.login}>
                        <TextField
                            onChange={onChange}
                            value={email}
                            name="email"
                            type="text"
                            floatingLabelText={"Correo electrónico"}
                        />
                        <TextField
                            onChange={onChange}
                            value={password}
                            name="password"
                            type="password"
                            floatingLabelText={"Contraseña"}
                        />
                        <RaisedButton
                            type="submit"
                            labelColor="white"
                            backgroundColor="orange"
                            label={loading ? <CircularProgress color="white" size={30}/>:"Iniciar Sesión"}
                        />
                    </div>
                    <span>¿Olvidaste tu contraseña?, <Link to="/registro">Recuperala</Link></span>
                    <br/>
                   <span>¿No tienes cuenta?, <Link to="/registro">¡Crea una!</Link></span>

                </Card>
            </form>
        </div>


    );
};

//LoginDisplay.propTypes = {};

const styles = {
    tabla: {
        backgroundImage:"url('http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg')",
        backgroundSize:"cover",
        display:"table",
        width:"100%",
        height:"100vh"
    },
    card:{
        paddingTop:"20px",
        paddingBottom:"20px",
        maxWidth:"420px",
        margin:"0 auto"
    },

    centrado:{
        display:"table-cell",
        textAlign:"center",
        verticalAlign:"middle",

    },

    login:{
        maxWidth:"400px",
        height:"300px",
        margin:"0 auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around"
    },

};

