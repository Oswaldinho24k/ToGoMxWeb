import React from 'react';
import {IconButton, IconMenu, List, ListItem, MenuItem, Paper, RaisedButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSub from 'material-ui/svg-icons/content/clear';
import ContentRem from 'material-ui/svg-icons/content/delete-sweep';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);
// {/*<IconMenu iconButtonElement={iconButtonElement}>*/}
// {/*<MenuItem>Restar elemento</MenuItem>*/}
// {/*<MenuItem>Eliminar</MenuItem>*/}
// {/*<MenuItem>Delete</MenuItem>*/}
// {/*</IconMenu>*/}
const RightIconMenu = ({addNewItem, removeItem, product}) => (
        <div >
            <IconButton
                style={{position:'absolute', right: 40, top: 20}}
                onClick={() => addNewItem(product)}
            >
                <ContentAdd/>
            </IconButton>
            <IconButton
                style={{position:'absolute', right: 80, top: 20}}
                onClick={ () => removeItem(product) }
            >
                <ContentSub/>
            </IconButton>
            <IconButton
                style={{ position:'absolute', right: 0, top: 20 }}
                onClick={ () => removeItem(product) }
            >
                <ContentRem/>
            </IconButton>
        </div>
);

const CajaComponent = ({ products, total, addNewItem, removeItem, openEndSell }) => {
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
                rightIcon={ <RightIconMenu addNewItem={addNewItem} removeItem={removeItem} product={product}/> }
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
                onClick={openEndSell}
            />
        </Paper>
    );
};

export default CajaComponent;