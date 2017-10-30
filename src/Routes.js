import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import CajaComponent from "./components/caja/CajaComponent";


const Routes = () => (
    <Switch>
        <Route path="/inventario" component={InventarioPage}/>
        <Route path="/caja" component={CajaComponent}/>
    </Switch>
);

export default Routes