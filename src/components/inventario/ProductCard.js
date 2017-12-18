import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton} from 'material-ui';
import './inventario.css';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import './inventario.css';



const ProductCard = ({product, onClickPlus, stock}) => {
    //console.log(stock);
    if(stock===undefined) stock=0;
    return (
        <div className="inventario-card">
            <Card>
                <CardMedia
                    mediaStyle={{maxHeight:'200px', overflow:'hidden'}}
                    overlay={<CardTitle title={product.name} subtitle={product.desc} />}>
                    {product.image?
                        <img src={product.image} alt="" className="product_image"/>:
                        <img src="https://pbs.twimg.com/profile_images/702616676727033857/faFJSbWF.jpg" alt="" />}
                </CardMedia>
                <CardText>
                    <p>Precio de Compra:${product.sell_price}</p>

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