import React from 'react';
import ProductCard from "./ProductCard";
import {GridList, GridTile} from 'material-ui';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import './inventario.css';


export const ProductsList = ({products}) => {
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




export const ProducstTable = ({products}) => {
    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Sell Price</TableHeaderColumn>
                </TableRow>
            </TableHeader>

            <TableBody>
                {products.map((p, key)=>{
                    return(
                        <TableRow key={key}>
                            <TableRowColumn>{p._id}</TableRowColumn>
                            <TableRowColumn>{p.name}</TableRowColumn>
                            <TableRowColumn>{p.sell_price}</TableRowColumn>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
};