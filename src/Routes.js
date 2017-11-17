import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import CajaContainer from "./components/caja/CajaContainer";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';

import Home from './components/home/Home';
import PerfilPage from './components/perfil/PerfilPage';
import AdminPage from './components/admin/AdminPage';
import StoreInventory from './components/storeInventory/StoreInventory';



const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inventario/:cat1/:cat2/:cat3" component={InventarioPage}/>
        <Route path="/inventario/:cat1/:cat2" component={InventarioPage}/>
        <Route path="/inventario/:cat1" component={InventarioPage}/>
        <Route path="/inventario/" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/registro" component={RegistroContainer}/>
        <Route path="/caja" component={CajaContainer}/>
        <Route path="/perfil" component={PerfilPage} />
        <Route path="/admin" component={AdminPage}/>
        <Route exact path="/:myStoreId" component={StoreInventory} />
        <Route path="/:myStoreId/:cat1/:cat2/:cat3" component={StoreInventory} />

    </Switch>
);

export default Routes