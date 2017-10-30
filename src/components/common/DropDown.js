import React from 'react';
import {SelectField, MenuItem} from 'material-ui';

const DropDown = (props) => {
    let items = props.data.map( item => {
        return <MenuItem key={item.value} value={item.value} primaryText={item.primaryText}/>
    });

    return (
        <div>
            <SelectField
                floatingLabelText={props.label}
                value={props.value}
                onChange={props.onChange}
                {...props}
            >
                {items}
            </SelectField>
        </div>
    );
};

export default DropDown;