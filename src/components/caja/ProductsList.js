import React from 'react';
import Table from '../common/TableFixter';

const CajaComponent = (props) => {
    return (
        <div>
            <Table
                columns={props.columnas}
                dataSource={props.productos}
            />
        </div>
    );
};

export default CajaComponent;