import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';


const Routes = () => (
    <Switch>
        <Route path="/inventario" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/registro" component={RegistroContainer}/>

    </Switch>
);

export default Routes