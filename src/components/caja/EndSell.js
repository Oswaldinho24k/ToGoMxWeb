import React from 'react';
import {TextField} from 'material-ui';

export const EndSell = ({ onSubmit, onInputChange: onChange, change, amount }) => {
    return (
        <form id="endsell" onSubmit={onSubmit}>
            <TextField
                name="amountEndSell"
                value={amount}
                onChange={onChange}
                floatingLabelText="Cantidad en efectivo"
                type="number"
            />
            <h3>{ change > 0 ? 'Cambio: $' + change : 'Ingresa cantidad mayor a total' }</h3>
        </form>
    );
};