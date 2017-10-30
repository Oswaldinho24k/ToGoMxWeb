/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {RaisedButton, TextField} from 'material-ui';


export const LoginDisplay = ({props}) => {
    return (
        <div style={styles.container}>
            <div style={styles.login}>
                <TextField
                    type="text"
                    floatingLabelText="Correo electronico"
                />
                <TextField
                    type="password"
                    floatingLabelText="Contraseña"
                />
                <RaisedButton
                    label="Iniciar Sesión"
                />
            </div>
        </div>
    );
};

//LoginDisplay.propTypes = {};

const styles = {
    conatiner: {
        width:"100%"
    },
    login:{
        maxWidth:"400px",
        margin:"0 auto"
    }
};

