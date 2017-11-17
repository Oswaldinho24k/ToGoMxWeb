import React, { Component } from 'react';
import {Drawer, IconButton, AppBar} from 'material-ui';

import Routes from "./Routes";
import Menu from 'material-ui/svg-icons/navigation/menu';
import Dots from 'material-ui/svg-icons/navigation/more-vert';
import Close from 'material-ui/svg-icons/navigation/close';
//import ContentAdd from 'material-ui/svg-icons/content/add';
import {IconMenu, MenuItem} from 'material-ui';
import {signOut} from "./firebase";
import {withRouter} from 'react-router-dom';

import CategoriesMenu from './components/inventario/CategoriesMenu';
import Notifications from "./components/notifications/Notifications";

import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as barActions from './redux/actions/barActions';



const Logged = ({signOut, goTo}) => (
    <IconMenu

        iconButtonElement={
            <IconButton><Dots color="white" /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem onClick={()=>goTo("/caja/categorias")} primaryText="Punto de Venta" />
        <MenuItem onClick={()=>goTo("/perfil")} primaryText="Tu Perfil" />
        <MenuItem onClick={()=>goTo("/inventario")} primaryText="Tu Inventario" />
        <MenuItem onClick={signOut} primaryText="Cerrar Sesión" />
    </IconMenu>
);


class App extends Component {
    state={
        drawer:false,
        addForm:false,
    };

    handleDrawerToggle = () => {
        this.setState({drawer: !this.state.drawer});
        this.props.barActions.changeBarStatus(!this.state.drawer)
    };

    signOut = () => {
        signOut();
        this.props.history.push("/login");
    };

    goTo = (route) => {
        this.props.history.push(route)
    };

    render() {
    return (
      <div className="App">

        <Drawer
            open={this.props.bar}
            className="drawer-categorias">
                    <span className="close-menu-button">
                        <IconButton  onTouchTap={this.handleDrawerToggle}><Close/></IconButton>
                    </span>
          <CategoriesMenu match={this.props.match} history={this.props.history}/>
        </Drawer>
        <AppBar
            style={{backgroundColor:"#FF9100"}}
            title="TogoMx"
            iconElementLeft={<IconButton onClick={this.handleDrawerToggle}><Menu/></IconButton>}
            iconElementRight={<Logged goTo={this.goTo} signOut={this.signOut} />}
        />
          <Notifications />
       <div className={this.props.bar?'drawer_open':'drawer_close'}>
           <Routes/>
       </div>
      </div>
    );
  }
}

function mapStateToProps(state,oP){

    return{
        bar:state.bar,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        barActions:bindActionCreators(barActions, dispatch)
    }
}
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(App);
