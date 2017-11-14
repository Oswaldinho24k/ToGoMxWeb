/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import ProductCard from '../inventario/ProductCard';


export const StoreInventoryDisplay = ({stock, items, stockAddOne, myStoreId}) => {
    return (
        <div style={styles.container}>
            {items.map((i, index)=>{
                return(
                <div style={styles.card} key={index}>
                    <ProductCard stock={stock[i.key]} onClickPlus={()=>stockAddOne(i, myStoreId)}  product={i} />
                </div>
                );
            })}
        </div>
    );
};


const styles = {
  container:{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center"
  },
    card:{
        maxWidth:300
  }

};