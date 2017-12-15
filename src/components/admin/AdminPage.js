import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/notificationActions';
import {FloatingActionButton, Dialog, IconButton, TextField} from "material-ui";
import FabIcon from 'material-ui/svg-icons/content/add';
import NewProduct from './NewProduct';
import {Link, Route} from "react-router-dom";
import {ProducstTable, ProductsList} from "../inventario/ProductsList";
import List from 'material-ui/svg-icons/action/view-list';
import '../inventario/inventario.css';

class AdminPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            openAddProduct: false,
            product: {

            },
            search:'',
            vista:false,
        };
    }

    handleView=()=>{
        let vista = !this.state.vista;
        this.setState({vista})
    };
    handleSearch=(e)=>{
        this.setState({search:e.target.value})
    };



    render() {
        const {product, openAddProduct, search} = this.state;
        const {products} = this.props;
        const regEx = new RegExp(search,'i');
        let filtered = products.filter(p=>{
            return regEx.test(p.name) || regEx.test(p.desc)
        });
        return (
            <div>
                <div className={'products-manager'}>
                    <span className={'view'}>
                        <IconButton onClick={this.handleView} tooltip="Cambia la vista">
                            <List/>
                        </IconButton>
                    </span>
                    <span className={'search'}>
                        <TextField
                            fullWidth={true}
                            floatingLabelFixed={true}
                            floatingLabelText={'Buscador'}
                            hintText={'Busca por nombre'}
                            value={search}
                            onChange={this.handleSearch}/>
                    </span>
                    <span className={'filter'}>
                        Filtro
                    </span>
                </div>
                {this.state.vista?
                    <ProductsList products={filtered}/>
                    :
                    <ProducstTable products={filtered}/>
                }
                <Route exact path="/admin/new" component={NewProduct}/>
                <FloatingActionButton
                    style={{position:'fixed',bottom:25, right: 25}}
                    containerElement={<Link to="/admin/new"/>}
                >
                    <FabIcon/>
                </FloatingActionButton>

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        products:state.products,
        tiendas:state.tiendas,
        fetched:state.tiendas!==undefined
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

AdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);
export default AdminPage
