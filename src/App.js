import React, { Component } from 'react';
import {Drawer, IconButton, AppBar} from 'material-ui';

import Routes from "./Routes";
import Menu from 'material-ui/svg-icons/navigation/menu';
import Dots from 'material-ui/svg-icons/navigation/more-vert';
import Close from 'material-ui/svg-icons/navigation/close';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CategoriesMenu from './components/inventario/CategoriesMenu';



class App extends Component {
    state={
        drawer:false,
        addForm:false,
    };

    handleDrawerToggle = () => this.setState({drawer: !this.state.drawer});
  render() {
    return (
      <div className="App">
          <p>la notificación</p>
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
            iconElementRight={<IconButton><Dots /></IconButton>}
        />
       <Routes/>
      </div>
    );
  }
}

export default App;
