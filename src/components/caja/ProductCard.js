import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSub from 'material-ui/svg-icons/content/clear';

const ProductCard = ({addNewItem, removeItem, product}) => {
        const {name, sell_price} = product;
        return (
                <Card className="inventario-card" >
                    <CardMedia
                        mediaStyle={{maxHeight: '100px', overflow: 'hidden'}}
                        //overlay={<CardTitle title={product.name} subtitle={product.presentacion}/>}>
                    >
                        <img src="https://pbs.twimg.com/profile_images/702616676727033857/faFJSbWF.jpg" alt=""/>
                    </CardMedia>
                    <CardText style={{padding:5}}>
                        {name}
                        <br/>
                        ${sell_price}
                        <div className="add-item-in-card">
                            <IconButton onClick={() => addNewItem(product)}>
                                <ContentAdd/>
                            </IconButton>
                            <IconButton onClick={() => removeItem(product)}>
                                <ContentSub/>
                            </IconButton>
                        </div>
                    </CardText>

            </Card>
        );
};

export default ProductCard;