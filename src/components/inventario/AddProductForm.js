import React from 'react';
import {TextField} from 'material-ui';



const AddProductForm = ({props}) => {
    return (
        <div>
            <TextField
                fullWidth={true}
                hintText="Producto"
                floatingLabelText="Nombre del Producto"
            /><br/>
            <TextField
                fullWidth={true}
                hintText="200g"
                floatingLabelText="Presentación"
            /><br/>
            <TextField
                fullWidth={true}
                hintText="100"
                floatingLabelText="Precio de Compra"
            /><br/>
            <TextField
                fullWidth={true}
                hintText="150"
                floatingLabelText="Precio de Venta"
            />

        </div>
    )
};

export default AddProductForm;