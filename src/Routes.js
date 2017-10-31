import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import CajaContainer from "./components/caja/CajaContainer";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';



const Routes = () => (
    <Switch>xº
        <Route path="/inventario/:cat1/:cat2/:cat3" component={InventarioPage}/>
        <Route path="/inventario/:cat1/:cat2" component={InventarioPage}/>
        <Route path="/inventario/:cat1" component={InventarioPage}/>
        <Route path="/inventario/" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/registro" component={RegistroContainer}/>
        <Route path="/caja" component={CajaComponent}/>

    </Switch>
);

export default Routes