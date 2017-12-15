import React from 'react';
import {IconButton, IconMenu, List, ListItem, MenuItem, Paper, RaisedButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400} from 'material-ui/styles/colors';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem>Restar elemento</MenuItem>
            <MenuItem>Eliminar</MenuItem>
            <MenuItem>Delete</MenuItem>
        </IconMenu>
);

const CajaComponent = ({products, total}) => {
    let disabled = false;
    if(products.length === 0){
        disabled = true;
    }
    let productsToDisplay = [];
    if ( products ){
        productsToDisplay = products.map ( ( product , key ) => {
            return <ListItem
                key={key}
                leftIcon={ <p style={{fontSize:'1em'}}>{product.amount}</p>}
                rightIcon={ rightIconMenu }
                primaryText={ product.name}
                secondaryText={ '$ '  + product.subtotal}
            />
        });
    }
    return (
        <Paper zDepth={4} className="show_list_item_to_sell" >
            <List style={{height:'80%', overflowY:'auto', overflowX:'hidden'}}>
                {productsToDisplay}
            </List>
            <br/>
            {!disabled && <h3>Total: $ {total}</h3>}
            <RaisedButton
                disabled={disabled}
                labelColor='#FFFFFF'
                backgroundColor="#FF9100"
                label="Finalizar compra"
            />
        </Paper>
    );
};

export default CajaComponent;