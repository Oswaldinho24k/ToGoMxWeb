import React from 'react';
import {Card, CardText, CardTitle, CardMedia, TextField, IconButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';

class ProductCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numeroProductos: 1
        }
    }

    onClick = (e) => {
        const {numeroProductos} = this.state;
        let product = Object.assign({},this.props.product);
        product.cantidad = numeroProductos;
        product.precio_total = product.cantidad * product.precio_venta;
        this.props.addNewItem(product)
    };

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    };
    render() {
        const {product} = this.props;
        const {numeroProductos} = this.state;
        return (
            <div className="inventario-card">
                <Card>
                    <CardMedia
                        mediaStyle={{maxHeight: '200px', overflow: 'hidden'}}
                        overlay={<CardTitle title={product.producto} subtitle={product.presentacion}/>}>
                        <img src="https://s3.producthunt.com/static/kitty_265x244%402x.png" alt=""/>
                    </CardMedia>
                    <CardText>
                        <p>Precio de Compra:${product.precio_compra}</p>
                        <p>Precio de Venta: ${product.precio_venta}</p>
                        <p>Stock: 10</p>

                        <div className="add-item-in-card">
                            <TextField
                                name='numeroProductos'
                                value={numeroProductos}
                                style={{width: '30%'}}
                                onChange={this.onChange}
                                hintText="1"
                                type="number"/>
                            <IconButton onClick={this.onClick}>
                                <ContentAdd/>
                            </IconButton>
                        </div>


                    </CardText>

                </Card>
            </div>
        );
    }
}

export default ProductCard;