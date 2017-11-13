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

    getSubcategorias = () => {
        const {categoria} = this.state;
        switch (categoria){
            case 'tiendita':
                return fakeFirebase.subcategoriasTiendita;
            case 'farmacia':
                return fakeFirebase.subcategoriasFarmacia;
        }
    };

    getSubSubCategorias = () => {
        const {subcategoria} = this.state
        switch (subcategoria){
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

    getProductos = () => {
        const {subsubcategoria} = this.state;
        return fakeFirebase.productosEnergizantes;
        // switch (subsubcategoria){
        //
        // }
    };
    changeCategoria = (tile) => {
        this.handleTouchPictures('categoria',tile.value);
        this.props.history.push(this.props.match.url + '/subcategorias');
    };
    changeSubcategoria = (tile) => {
        this.handleTouchPictures('subcategoria',tile.value);
        this.props.history.push(this.props.match.url + '/subsubcategorias');
    };
    changeSubsubcategoria = (tile) => {
        this.handleTouchPictures('subsubcategoria',tile.value);
        this.props.history.push(this.props.match.url + '/productos');
    };
    render() {
        const {categoria,subcategoria, subsubcategoria} = this.state;
        let subcategorias = categoria !== '' ? this.getSubcategorias() : [];
        let subsubcategorias = subcategoria !== '' ? this.getSubSubCategorias(): [];
        let productos = subsubcategoria !== '' ? this.getProductos(): [];
        let {venta} = this.state;
        const columnas = [
            { title: 'Id', dataIndex: 'cantidad'},
            { title: 'Precio', dataIndex: 'precio_venta'},
            { title: 'Nombre', dataIndex: 'producto'}
        ];
        const url = this.props.match.url;
        const categoriasComponent = () => (
            <ShowCategorias
                handleChange={this.changeCategoria}
                items={fakeFirebase.categorias}
            />
        );
        const subcategoriasComponent = () => (
            <ShowCategorias
                handleChange={this.changeSubcategoria}
                items={subcategorias}
            />
        );
        const subsubcategoriaComponent = () => (
            <ShowCategorias
                handleChange={this.changeSubsubcategoria}
                items={subsubcategorias}
            />
        );
        return (
            <div className="rootCajaContainer">
                <RutasLocales
                    onClick={this.handleTouchPictures}
                    url={url}
                    categoriasComponent={categoriasComponent}
                    subcategoriasComponent={subcategoriasComponent}
                    subsubcategoriasComponent={subsubcategoriaComponent}
                />
                <ProductsListCards
                    columnas={columnas}
                    products={this.props.products}
                    addNewItem={this.addNewItem}
                />
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
    pathname = pathname.replace('caja','inventario');
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