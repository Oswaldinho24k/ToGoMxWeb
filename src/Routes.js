import {Switch, Route} from 'react-router-dom';
import React from 'react';
import InventarioPage from "./components/inventario/InventarioPage";
import CajaContainer from "./components/caja/CajaContainer";
import LoginContainer from "./components/login/LoginContainer";
import RegistroContainer from './components/login/RegistroContainer';
<<<<<<< HEAD
import Home from './components/home/Home';
=======
import PerfilPage from './components/perfil/PerfilPage';
import AdminPage from './components/admin/AdminPage';
import StoreInventory from './components/storeInventory/StoreInventory';
>>>>>>> 06f198af6e47062c0735dc3ea378c08923a8821a


const Routes = () => (
    <Switch>
        <Route path="/inventario/:cat1/:cat2/:cat3" component={InventarioPage}/>
        <Route path="/inventario/:cat1/:cat2" component={InventarioPage}/>
        <Route path="/inventario/:cat1" component={InventarioPage}/>
        <Route path="/inventario/" component={InventarioPage}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/registro" component={RegistroContainer}/>
        <Route path="/caja" component={CajaContainer}/>
        <Route path="/home" component={Home} />
        <Route path="/perfil" component={PerfilPage} />
        <Route path="/admin" component={AdminPage}/>
            <Route exact path="/:myStoreId" component={StoreInventory} />
            <Route path="/:myStoreId/:cat1/:cat2/:cat3" component={StoreInventory} />

    </Switch>
);

export default Routes