import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ProductsList from '../inventario/ProductsList';

const RutasLocales = ({ url, categoriasComponent,subcategoriasComponent, subsubcategoriasComponent}) => {
    const urlCategorias = url + '/categorias';
    const urlSubcategorias = url + '/subcategorias';
    const urlSubsubcategorias = url + '/subsubcategorias';
    const urlProductos = url + '/productos';
    return (
        <Switch>
            <Route
                path={urlCategorias}
                component={categoriasComponent}
            />
            <Route
                path={urlSubcategorias}
                component={subcategoriasComponent}
            />
            <Route
                path={urlSubsubcategorias}
                component={subsubcategoriasComponent}
            />
            <Route
                path={urlProductos}
                component={ProductsList}
            />
        </Switch>
    );
};

export default RutasLocales;