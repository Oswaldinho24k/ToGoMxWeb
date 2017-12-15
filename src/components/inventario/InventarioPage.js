import React, {Component} from 'react';
import {AppBar, Drawer, IconButton, FloatingActionButton, FlatButton, Dialog} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './inventario.css';
import {ProductsList, ProducstTable} from "./ProductsList";
import AddProductForm from "./AddProductForm";
import {connect} from 'react-redux';
import * as productsActions from '../../redux/actions/productsActions';
import {bindActionCreators} from "redux";
import firebase from '../../firebase';
import List from 'material-ui/svg-icons/action/view-list';



class InventarioPage extends Component {

    state={
        vista:false,
        drawer:false,
        addForm:false,
        products:[],
        newProduct:{},
        updateProduct:{},
        loader:false,
    };
    uploadPhoto=(e)=>{
        let newProduct = this.state.newProduct;
        let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('products/'+newProduct.producto+newProduct.presentacion).put(file);
        uploadTask.then(r=>{
            console.log(r);
            newProduct['image']=r.downloadURL;
            this.setState({newProduct, loader:false})
        });
        uploadTask.on('state_changed', snapshot=>{
            this.setState({loader:true});
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        });

    };

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
        this.setState({newProduct:{}})


    };
    handleText=(e)=>{
      let newProduct=this.state.newProduct;
      let field = e.target.name;
      newProduct['category'] = this.props.location.pathname;
      newProduct[field] = e.target.value;
      this.setState({newProduct});
        console.log(newProduct);
    };
    //handle products list view
    handleView=()=>{
        let vista = !this.state.vista;
        this.setState({vista})
    };


    render() {
        const {products} = this.props;
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
                <div className={'products-manager'}>
                    <span>
                        <IconButton onClick={this.handleView} tooltip="Cambia la vista">
                            <List/>
                        </IconButton>
                    </span>
                    <span>Buscador</span>
                    <span>Filtro</span>
                </div>
                {this.state.vista?
                    <ProductsList products={this.props.products}/>
                    :
                    <ProducstTable products={this.props.products}/>
                }


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
            /> <h4>{params.cat1} / {params.cat2} / {params.cat3}</h4>*/}


                {/*<FloatingActionButton onTouchTap={this.handleOpenAddForm} className="add-form-button">
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    autoScrollBodyContent={true}
                    title="Añade un nuevo Producto"
                    actions={actions}
                    modal={false}
                    contentStyle={{width:'30%'}}
                    open={this.state.addForm}
                    onRequestClose={this.handleCloseAddForm}
                >
                   <AddProductForm
                       handleText={this.handleText}
                       uploadPhoto={this.uploadPhoto}
                       loader={this.state.loader}
                        product={this.state.newProduct}/>
                </Dialog>*/}
            </div>
        )
    }
}
function mapStateToProps(state,oP){
    console.log(state.products);
    let products = state.products.filter(filtrado=>{
        return filtrado.category===oP.location.pathname;
    });
    return{
        products:state.products,
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