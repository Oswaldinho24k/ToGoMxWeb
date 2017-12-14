import React from 'react';
import {TextField, CircularProgress} from 'material-ui';
import './inventario.css';



const AddProductForm = ({handleText, uploadPhoto, name, image, category, sell_price, desc, loader, onSubmit}) => {
    return (
        <form id="addproductform" onSubmit={onSubmit}>

            <TextField
                onChange={handleText}
                name="name"
                fullWidth={true}
                hintText="Producto"
                value={name}
                floatingLabelText="Nombre del Producto"
            /><br/>
            <TextField
                onChange={handleText}
                name="desc"
                fullWidth={true}
                value={desc}
                hintText="200g"
                floatingLabelText="Presentación"
            /><br/>
            <TextField
                onChange={handleText}
                value={sell_price}
                name="sell_price"
                fullWidth={true}
                hintText="150"
                floatingLabelText="Precio de Venta"
            />
            <div className="upload_photo">
                <div className="loader_photo">
                    {loader?<CircularProgress size={80} thickness={5} />:''}
                </div>
                <img src={image} alt="" className="product_image_form"/>
                <input type="file" onChange={uploadPhoto}/>

            </div>

        </form>
    )
};

export default AddProductForm;