import React from 'react';
import GridList from '../common/GridListFixter';
import * as fakeFirebase from "./fakeFirebase";

const ShowSubsubcategorias = ({itemsCategoria, handleChange, history, match, location}) => {
    console.info('Subcat', match.params);
    const getSubSubCategorias = () => {
        switch (match.params.subcategoria){
            case 'bebidas':
                return fakeFirebase.subcategoriasBebidas;
            case 'botanas':
                return fakeFirebase.subcategoriasBotanas;
            case 'antidepresivos':
                return fakeFirebase.subcategoriasAntidepresivos;
            case 'anastelsicos':
                return fakeFirebase.subcategoriasAnastelsico;
        }
    };
    const changeSubsubcategoria = (tile) => {
        history.push(location.pathname + '/' + tile.value);
    };
    const items = getSubSubCategorias();
    return (
        <GridList
            tilesData={items}
            onClick={changeSubsubcategoria}
            gridListProps={gridListProps}
        />
    );
};

const gridListProps = {
    cellHeight: 200,
    padding: 10,
    cols: 4
};

export default ShowSubsubcategorias;