import React from 'react';
import {TextField} from 'material-ui';



const AddProductForm = ({handleText}) => {
    return (
        <div>
            <TextField
                onChange={handleText}
                name="producto"
                fullWidth={true}
                hintText="Producto"
                floatingLabelText="Nombre del Producto"
            /><br/>
            <TextField
                onChange={handleText}
                name="presentacion"
                fullWidth={true}
                hintText="200g"
                floatingLabelText="Presentación"
            /><br/>
            <TextField
                onChange={handleText}
                name="precio_compra"
                fullWidth={true}
                hintText="100"
                floatingLabelText="Precio de Compra"
            /><br/>
            <TextField
                onChange={handleText}
                name="precio_venta"
                fullWidth={true}
                hintText="150"
                floatingLabelText="Precio de Venta"
            />

        </div>
    )
};

export default AddProductForm;