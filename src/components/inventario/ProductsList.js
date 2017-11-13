import React from 'react';
import ProductCard from "./ProductCard";
import {GridList, GridTile} from 'material-ui';
import './inventario.css';


const ProductsList = ({products}) => {
    return (
        <div className="lista-productos">

            <GridList cellHeight={'auto'} cols={4} className="grid-list">
                {products.map((p, key)=>{
                    return(
                        <GridTile cols={1} key={key}>
                            <ProductCard product={p}/>
                        </GridTile>
                    )
                })}

            </GridList>

        </div>
    )
};

export default ProductsList;