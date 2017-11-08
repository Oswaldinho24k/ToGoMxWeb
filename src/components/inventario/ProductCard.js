import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton} from 'material-ui';
import './inventario.css';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';

const ProductCard = ({props}) => {
    return (
        <div className="inventario-card">
            <Card>
                <CardMedia
                    mediaStyle={{maxHeight:'200px', overflow:'hidden'}}
                    overlay={<CardTitle title="Producto" subtitle="Presentación" />}>
                    <img src="https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="" />
                </CardMedia>
                <CardText>
                    <p>Precio de Compra:$100</p>
                    <p>Precio de Venta: $120</p>
                    <p>Stock: 10</p>

                    <div className="add-item-in-card">
                        <TextField
                            style={{width:'30%'}}
                            hintText="1"
                            type="number"/>
                        <IconButton>
                            <ContentAdd/>
                        </IconButton>
                    </div>


                </CardText>

            </Card>
        </div>
    )
};

export default ProductCard;