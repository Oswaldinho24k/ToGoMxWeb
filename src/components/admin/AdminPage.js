import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {RaisedButton} from 'material-ui';
import * as actions from '../../redux/actions/notificationActions';
import {FloatingActionButton, Dialog} from "material-ui";
import FabIcon from 'material-ui/svg-icons/content/add';
import NewProduct from './NewProduct';
import {Link, Route} from "react-router-dom";

class AdminPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            openAddProduct: false,
            product: {

            }
        };
    }



    render() {
        const {product, openAddProduct} = this.state;
        return (
            <div>
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
