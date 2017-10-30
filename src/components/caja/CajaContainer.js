import React, {Component} from 'react';
import * as fakeFirebase from './fakeFirebase';
import ProductsList from './ProductsList';
import AddNewItem from "./AddNewItemGrid";

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

    // handleDropDownChange = (event, index, value, name) => {
    //     this.setState({[name]:value});
    // };

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

    render() {
        const {categoria,subcategoria, subsubcategoria} = this.state;
        let subcategorias = categoria !== '' ? this.getSubcategorias() : [];
        let subsubcategorias = subcategoria !== '' ? this.getSubSubCategorias(): [];
        let productos = subsubcategoria !== '' ? this.getProductos(): [];
        let itemsVenta = this.state.venta.items;
        const columnas = [
            { title: 'Id', dataIndex: 'id'},
            { title: 'Precio', dataIndex: 'precio'},
            { title: 'Nombre', dataIndex: 'nombre'}
        ];
        return (
            <div>
                <AddNewItem
                    categorias={fakeFirebase.categorias}
                    categoria={categoria}
                    subcategorias={subcategorias}
                    subcategoria={subcategoria}
                    subsubcategorias={subsubcategorias}
                    subsubcategoria={subsubcategoria}
                    productos={productos}
                    onClick={this.handleTouchPictures}
                    addNewItem={this.addNewItem}
                />
                <ProductsList
                    columnas={columnas}
                    productos={itemsVenta}
                />
            </div>
        );
    }
}

export default CajaContainer;