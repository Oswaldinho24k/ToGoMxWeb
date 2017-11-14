import React from 'react';
import {TextField, CircularProgress} from 'material-ui';
import './inventario.css';



const AddProductForm = ({handleText, uploadPhoto, product, loader}) => {
    return (
        <div>

            <TextField
                onChange={handleText}
                name="producto"
                fullWidth={true}
                hintText="Producto"
                value={product.producto}
                floatingLabelText="Nombre del Producto"
            /><br/>
            <TextField
                onChange={handleText}
                name="presentacion"
                fullWidth={true}
                value={product.presentacion}
                hintText="200g"
                floatingLabelText="Presentación"
            /><br/>
            <TextField
                onChange={handleText}
                value={product.precio_venta}
                name="precio_venta"
                fullWidth={true}
                hintText="150"
                floatingLabelText="Precio de Venta"
            />
            <div className="upload_photo">
                <div className="loader_photo">
                    {loader?<CircularProgress size={80} thickness={5} />:''}
                </div>
                <img src={product.image} alt="" className="product_image_form"/>
                <input type="file" onChange={uploadPhoto}/>

            </div>

        </div>
    )
};

export default AddProductForm;