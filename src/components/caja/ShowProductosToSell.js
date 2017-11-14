import React from 'react';
import Table from '../common/TableFixter';
import {RaisedButton} from 'material-ui';

const CajaComponent = (props) => {
    let disabled = false;
    if(props.productos.length === 0){
        disabled = true;
    }
    return (
        <div className="show_list_item_to_sell">
            <Table
                columns={props.columnas}
                dataSource={props.productos}
            />
            <br/>
            <RaisedButton
                disabled={disabled}
                className="finalizar_compra"
                primary={true}
                label="Finalizar compra"
            />
        </div>
    );
};

export default CajaComponent;