import React, {Component} from 'react';
import * as fakeFirebase from './fakeFirebase';
import ProductsList from './ShowProductosToSell';
import ProductsListCards from './ProductsList';
import './CajaStyles.css';
import ShowCategorias from "./ShowCategorias";
import RutasLocales from "./RutasLocales";
import {bindActionCreators} from "redux";
import * as productsActions from '../../redux/actions/productsActions';
import {connect} from "react-redux";
import {Route,Switch} from "react-router-dom";
import ShowSubcategorias from "./ShowSubcategorias";
import ShowSubsubcategorias from "./ShowSubsubcategorias";
import {Dialog, IconButton, RaisedButton} from "material-ui";
import {EndSell} from "./EndSell";
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import NextIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

class CajaContainer extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            endSell: false,
            categoria: '',
            subcategoria: '',
            subsubcategoria: '',
            venta: {
                items: []
            },
            total: 0,
            amountEndSell:0,
            change:0
        };
    }

    handleTouchPictures = (name,value) => {
        this.setState({[name]:value});
    };

    addNewItem = (producto) => {
        let {venta, total} = this.state;
        let product = {...producto};
        const item = venta.items.filter( item => {
            return item._id === producto._id;
        })[0];
        if ( item !== undefined){
            item.amount += 1;
            item.subtotal = item.amount * producto.sell_price;
            venta.items = venta.items.map( itemVenta => {
                if ( itemVenta._id === producto._id){
                    return item
                }
                return itemVenta;
            });
        }else{
            product.amount = 1;
            product.subtotal  = producto.sell_price;
            venta.items.push(product);
        }
        total += producto.sell_price;
        this.setState({venta, total});
    };

    removeItem = (producto) => {
        let {venta, total} = this.state;
        const item = venta.items.filter( item => {
            return item._id === producto._id;
        })[0];
        if(item !== undefined) {
            if (item.amount > 1) {
                item.amount -= 1;
                item.subtotal = item.amount * producto.sell_price;
                venta.items = venta.items.map(itemVenta => {
                    if (itemVenta._id === producto._id) {
                        return item
                    }
                    return itemVenta;
                });
            } else {
                venta.items = venta.items.filter(itemVenta => {
                    return itemVenta._id !== producto._id;
                });
            }
            total -= producto.sell_price;
        }
        this.setState({venta, total});
    };


    getProductos = () => {
        const {subsubcategoria} = this.state;
        return fakeFirebase.productosEnergizantes;
        // switch (subsubcategoria){
        //
        // }
    };
    changeCategoria = (tile) => {
        this.props.history.push('/caja/categorias/' + tile.value);
    };

    changeSubsubcategoria = (tile) => {
        console.info(this.props.location.pathname);
        this.props.history.push(this.props.location.pathname + 'productos');
    };

    ////////////////////////////end sell /////////////////////////////////////

    openEndSell   = ( ) => this.setState({['endSell']: true});
    closeEndSell  = ( ) => this.setState({['endSell']: false});

    onInputChange = ( e ) => {
        this.setState({[e.target.name]:e.target.value}, prevState => {
            let {total, change, amountEndSell} = this.state;
            change = amountEndSell - total ;
            this.setState({change});
        });


    };

    actionsEndSell = [
        <RaisedButton
            label="Cancelar"
            onClick={this.closeEndSell}
        />,
        <RaisedButton
            label="Finalizar"
            form="endsell"
            type="submit"
        />
    ];

    render() {
        console.warn('Los productos:' , this.props.state);
        const {total, subcategoria, subsubcategoria, endSell, amountEndSell, change} = this.state;
        //let subcategorias = categoria !== '' ? this.getSubcategorias() : [];
        let subsubcategorias = subcategoria !== '' ? this.getSubSubCategorias(): [];
        let productos = subsubcategoria !== '' ? this.getProductos(): [];
        let {venta} = this.state;
        const columnas = [
            { title: 'Cantidad', dataIndex: 'cantidad'},
            { title: 'Producto', dataIndex: 'producto'},
            { title: 'Precio unitario', dataIndex: 'precio_venta'},
            { title: 'Precio total', dataIndex: 'precio_total'}
        ];
        const url = this.props.match.url;
        const categoriasComponent = () => (
            <ShowCategorias
                handleChange={this.changeCategoria}
                items={fakeFirebase.categorias}
            />
        );
        const subcategoriasComponent = ({match}) => (
            <ShowSubcategorias
                handleChange={this.changeSubcategoria}
                match={match}
                history={this.props.history}
                //items={subcategorias}
            />
        );
        const subsubcategoriaComponent = ({match}) => (
            <ShowSubsubcategorias
                handleChange={this.changeSubsubcategoria}
                match={match}
                history={this.props.history}
                location={this.props.location}
                //items={subsubcategorias}
            />
        );
        const productosComponent = ({match}) => (
            <ProductsListCards
                columnas={columnas}
                products={this.props.products}
                addNewItem={this.addNewItem}
                removeItem={this.removeItem}
            />
        );
        return (
            <div className="rootCajaContainer" >
                <div className="lista-productos">
                    <IconButton
                        style={{width:60,height:60}}
                        iconStyle={{width:60,height:40}}
                        className="getBack"
                        onClick={() => this.props.history.goBack()}
                    >
                        <BackIcon/>
                    </IconButton>
                    <Switch>
                        <Route  path='/caja/categorias/:categoria/:subcategoria/:subsubcategoria' component={productosComponent}/>
                        <Route  path='/caja/categorias/:categoria/:subcategoria'  render={subsubcategoriaComponent}/>
                        <Route  path='/caja/categorias/:categoria'                render={subcategoriasComponent}/>
                        <Route  path='/caja/categorias'                           render={categoriasComponent} />
                    </Switch>
                    <IconButton
                        style={{width:60,height:60}}
                        iconStyle={{width:40,height:40}}
                        className="goAhead"
                        onClick={() => this.props.history.goForward()}
                    >
                        <NextIcon/>
                    </IconButton>
                </div>
                <ProductsList
                    columns={columnas}
                    products={venta.items}
                    addNewItem={this.addNewItem}
                    removeItem={this.removeItem}
                    total={total}
                    openEndSell={this.openEndSell}
                />
                <Dialog
                    title='Finalizar compra'
                    modal={false}
                    open={endSell}
                    onRequestClose={this.closeEndSell}
                    contentStyle={{width:'40%'}}
                    actions={this.actionsEndSell}
                >
                    <EndSell
                        onInputChange={this.onInputChange}
                        amount={amountEndSell}
                        change={change}
                    />
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state,oP){
    // let pathname = oP.location.pathname;
    // pathname = pathname.replace('caja/categorias','inventario');
    // console.info('El path', pathname);
    // let products = state.products.filter(filtrado=>{
    //     return filtrado.category === pathname;
    // });
    return{
        products: state.products,
        bar:state.bar,
        state: state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        productsActions:bindActionCreators(productsActions, dispatch)
    }
}

CajaContainer = connect(mapStateToProps,mapDispatchToProps) (CajaContainer);
export default CajaContainer;