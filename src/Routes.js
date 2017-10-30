import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";


const Routes = () => (
    <Switch>
        <Route path="/inventario" component={InventarioPage}/>
    </Switch>
);

export default Routes