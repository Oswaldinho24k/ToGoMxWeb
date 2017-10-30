import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import CajaContainer from "./components/caja/CajaContainer";


const Routes = () => (
    <Switch>
        <Route path="/inventario" component={InventarioPage}/>
        <Route path="/caja" component={CajaContainer}/>
    </Switch>
);

export default Routes