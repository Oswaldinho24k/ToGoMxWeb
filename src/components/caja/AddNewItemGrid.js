import React from 'react';
import GridList from "../common/GridListFixter";

function formatearProductoAGrid(productos) {
    return productos.map( producto => {
        return {
            title: producto.nombre,
            subtitle: '$' + producto.precio,
            img: '',
            value: producto.id,
            producto: producto
        }
    });
}

const AddNewItemGrid = (props) => {
    const changeCategoria = (tile) => {
        props.onClick('categoria',tile.value);
    };
    const changeSubcategoria = (tile) => {
        props.onClick('subcategoria',tile.value);
    };
    const changeSubsubcategoria = (tile) => {
        props.onClick('subsubcategoria',tile.value);
    };
    const addNewItem = (tile) => {
        props.addNewItem(tile.producto);
    };
    const gridListProps = {
        cellHeight: 200,
        padding: 10,
        cols: 3
    };
    const productosGrid = formatearProductoAGrid(props.productos);
    return (
        <div>

            {
                props.subcategoria === '' &&
                <GridList
                    tilesData={props.subcategorias}
                    onClick={changeSubcategoria}
                    gridListProps={gridListProps}
                />
            }{
                props.subsubcategoria === '' &&
                <GridList
                    tilesData={props.subsubcategorias}
                    onClick={changeSubsubcategoria}
                    gridListProps={gridListProps}
                />
            }
            <GridList
                tilesData={productosGrid}
                onClick={addNewItem}
                gridListProps={gridListProps}
            />

        </div>
    );
};

export default AddNewItemGrid;