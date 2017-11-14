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

class CajaContainer extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            categoria: '',
            subcategoria: '',
            subsubcategoria: '',
            venta: {
                items: []
            }
        };
    }

    handleTouchPictures = (name,value) => {
        this.setState({[name]:value});
    };

    addNewItem = (producto) => {
        let {venta} = this.state;
        venta.items.push(producto);
        this.setState({venta});
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

    render() {
        const {categoria,subcategoria, subsubcategoria} = this.state;
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
            />
        );
        return (
            <div className="rootCajaContainer">
                <Switch>
                    <Route  path='/caja/categorias/:categoria/:subcategoria/:subsubcategoria' component={productosComponent}/>
                    <Route  path='/caja/categorias/:categoria/:subcategoria'  render={subsubcategoriaComponent}/>
                    <Route  path='/caja/categorias/:categoria'                render={subcategoriasComponent}/>
                    <Route  path='/caja/categorias'                           render={categoriasComponent} />
                </Switch>

                <ProductsList
                    columnas={columnas}
                    productos={venta.items}
                />
            </div>
        );
    }
}

function mapStateToProps(state,oP){
    let pathname = oP.location.pathname;
    pathname = pathname.replace('caja/categorias','inventario');
    console.info('El path', pathname);
    let products = state.products.filter(filtrado=>{
        return filtrado.category=== pathname;
    });
    return{
        products:products,
        bar:state.bar,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        productsActions:bindActionCreators(productsActions, dispatch)
    }
}

CajaContainer = connect(mapStateToProps,mapDispatchToProps) (CajaContainer);
export default CajaContainer;