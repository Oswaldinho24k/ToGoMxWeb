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
const Logged = ({signOut, goTo}) => (
    <IconMenu

        iconButtonElement={
            <IconButton><Dots color="white" /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
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

    handleDrawerToggle = () => this.setState({drawer: !this.state.drawer});

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
            open={this.state.drawer}
            className="drawer-categorias">
                    <span className="close-menu-button">
                        <IconButton  onTouchTap={this.handleDrawerToggle}><Close/></IconButton>
                    </span>
          <CategoriesMenu match={this.props.match} history={this.props.history}/>
        </Drawer>
        <AppBar
            title="Title"
            iconElementLeft={<IconButton onClick={this.handleDrawerToggle}><Menu/></IconButton>}
            iconElementRight={<Logged goTo={this.goTo} signOut={this.signOut} />}
        />
          <Notifications />
       <Routes/>
      </div>
    );
  }
}

export default withRouter(App);
