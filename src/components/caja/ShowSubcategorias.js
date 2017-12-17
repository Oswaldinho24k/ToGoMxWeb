import React from 'react';
import GridList from '../common/GridListFixter';
import * as fakeFirebase from "./fakeFirebase";

const ShowSubcategorias = ({itemsCategoria, handleChange, history, match}) => {
    console.info('Subcat', match.params);
    const getSubcategorias = () => {
        switch (match.params.categoria){
            case 'tiendita':
                return fakeFirebase.subcategoriasTiendita;
            case 'farmacia':
                return fakeFirebase.subcategoriasFarmacia;
        }
    };
    const items = getSubcategorias();
    const changeSubcategoria = (tile) => {
        history.push('/caja/categorias/' + match.params.categoria + '/' + tile.value);
    };
    return (
            <GridList
                tilesData={items}
                onClick={changeSubcategoria}
                gridListProps={gridListProps}
            />
    );
};

const gridListProps = {
    cellHeight: 200,
    padding: 10,
    cols: 4
};

export default ShowSubcategorias;