import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton} from 'material-ui';
import './inventario.css';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';

const ProductCard = ({product, onClickPlus, stock}) => {
    //console.log(stock);
    if(stock===undefined) stock=0;
    return (
        <div className="inventario-card">
            <Card>
                <CardMedia
                    mediaStyle={{maxHeight:'200px', overflow:'hidden'}}
                    overlay={<CardTitle title={product.producto} subtitle={product.presentacion} />}>
                    <img src="https://s3.producthunt.com/static/kitty_265x244%402x.png" alt="" />
                </CardMedia>
                <CardText>
                    <p>Precio de Compra:${product.precio_compra}</p>
                    <p>Precio de Venta: ${product.precio_venta}</p>
                    <p>Stock: 10</p>

                    <div className="add-item-in-card">
                        <TextField
                            style={{width:'30%'}}
                            hintText="0"
                            type="number"
                            value={stock}
                        />
                        <IconButton>
                            <ContentAdd onClick={onClickPlus} />
                        </IconButton>
                    </div>


                </CardText>

            </Card>
        </div>
    )
};

export default ProductCard;