import React from 'react';
import Table from '../common/TableFixter';
import {List, ListItem, Paper, RaisedButton} from 'material-ui';

const CajaComponent = ({products, columns}) => {
    let disabled = false;
    if(products.length === 0){
        disabled = true;
    }
    let productsToDisplay = [];
    if ( products ){
        productsToDisplay = products.map ( ( product , key ) => {
            return <ListItem
                key={key}
                leftIcon={ <p>{product.amount} </p>}
                rightIcon={ <p> $ {product.subtotal}</p> }
                primaryText="Producto"
                secondaryText="Categoria"
            />
        });
    }
    return (
        <Paper zDepth={4} className="show_list_item_to_sell" >
            <List>
                {productsToDisplay}
            </List>
            <br/>
            <RaisedButton
                disabled={disabled}
                primary={true}
                label="Finalizar compra"
            />
        </Paper>
    );
};

CajaComponent.defaultProps = {
    products: [{},{},{}]
};

export default CajaComponent;