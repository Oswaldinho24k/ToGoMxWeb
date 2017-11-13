import React, {Component} from 'react';
import {AppBar, Drawer, IconButton, FloatingActionButton, FlatButton, Dialog} from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Dots from 'material-ui/svg-icons/navigation/more-vert';
import Close from 'material-ui/svg-icons/navigation/close';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CategoriesMenu from './CategoriesMenu';
import './inventario.css';
import ProductsList from "./ProductsList";
import AddProductForm from "./AddProductForm";
import {connect} from 'react-redux';
import * as productsActions from '../../redux/actions/productsActions';
import {bindActionCreators} from "redux";


class InventarioPage extends Component {

    state={
        drawer:false,
        addForm:false,
        products:[],
        newProduct:{},
        updateProduct:{}
    };
    componentWillMount(){

    }

    handleDrawerToggle = () => this.setState({drawer: !this.state.drawer});

    handleOpenAddForm = () => {
        this.setState({addForm: true});
    };

    handleCloseAddForm = () => {
        this.setState({addForm: false});
    };
    newProduct=()=>{
        this.props.productsActions.addNewProduct(this.state.newProduct);
        this.handleCloseAddForm()

    };
    handleText=(e)=>{
      let newProduct=this.state.newProduct;
      let field = e.target.name;
      newProduct['category'] = this.props.location.pathname;
      newProduct[field] = e.target.value;
      this.setState({newProduct});
        console.log(newProduct);
    };


    render() {
        console.log(this.props)
        const params = this.props.match.params;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.newProduct}
            />,
        ];
        return (
            <div>
                {/*<Drawer
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
            />*/}
                <h4>{params.cat1} / {params.cat2} / {params.cat3}</h4>
                <ProductsList products={this.props.products}/>
                <FloatingActionButton onTouchTap={this.handleOpenAddForm} className="add-form-button">
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Añade un nuevo Producto"
                    actions={actions}
                    modal={false}
                    contentStyle={{width:'30%'}}
                    open={this.state.addForm}
                    onRequestClose={this.handleCloseAddForm}
                >
                   <AddProductForm handleText={this.handleText}/>
                </Dialog>
            </div>
        )
    }
}
function mapStateToProps(state,oP){
    let products = state.products.filter(filtrado=>{
        return filtrado.category===oP.location.pathname;
    });
    return{
        products:products,
        bar:state.bar,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        productsActions:bindActionCreators(productsActions, dispatch)
    }
}
InventarioPage = connect(mapStateToProps, mapDispatchToProps)(InventarioPage);
export default InventarioPage;