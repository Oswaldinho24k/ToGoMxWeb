import React from 'react';
import ProductCard from "./ProductCard";
import {GridList, GridTile} from 'material-ui';
import '../inventario/inventario.css';


const ProductsList = ({products, addNewItem, removeItem}) => {
    return (
            <GridList cellHeight={'auto'} cols={4} className="grid-list">
                {products.map((p, key)=>{
                    return(
                        <GridTile cols={1} key={key}>
                            <ProductCard product={p} addNewItem={addNewItem} removeItem={removeItem}/>
                        </GridTile>
                    )
                })}

            </GridList>
    );
};

export default ProductsList;