import React from 'react';
import GridList from '../common/GridListFixter';

const ShowCategorias = ({items, handleChange}) => {
    return (
        <GridList
            tilesData={items}
            onClick={handleChange}
            gridListProps={gridListProps}
        />
    );
};

const gridListProps = {
    cellHeight: 200,
    padding: 10,
    cols: 4
};

export default ShowCategorias;