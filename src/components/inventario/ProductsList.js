import React from 'react';
import ProductCard from "./ProductCard";
import {GridList, GridTile} from 'material-ui';
import './inventario.css';


const ProductsList = ({props}) => {
    return (
        <div className="lista-productos">

            <GridList cellHeight={'auto'} cols={4} className="grid-list">
                <GridTile cols={1}>
                    <ProductCard/>
                </GridTile>
                <GridTile cols={1}>
                    <ProductCard/>
                </GridTile>
                <GridTile cols={1}>
                    <ProductCard/>
                </GridTile>
                <GridTile cols={1}>
                    <ProductCard/>
                </GridTile>
                <GridTile cols={1}>
                    <ProductCard/>
                </GridTile>
            </GridList>

        </div>
    )
};

export default ProductsList;