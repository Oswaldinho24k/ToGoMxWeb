import React, {Component} from 'react';
import AddProductForm from '../inventario/AddProductForm';
import {Dialog, FlatButton} from "material-ui";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveProduct} from '../../redux/actions/productsActions'
class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    onChangeInput = (e) => {
        let product = {...this.props.product || {}} ;
        product[e.target.name] = e.target.value;
        this.setState({product});
        console.log(product);
    };

    validateForm = () => {
        let product = {...this.state.product } ;
        //if (product === undefined || Object.keys(product).length < 1) return;
        let errors = {};
        console.log('Iam here bitch');
        if (product.name.length < 4 ) errors['name'] = 'El nombre no debe estar vacío' ;
        return Object.keys(errors).length <= 0;
    };

    submitForm = (e) => {
        console.log('Nigga bitch');
        e.preventDefault();
        if (this.validateForm()) {
            this.props.saveProduct(this.state.product);
        }
    };

    render() {
        const {product} = this.state;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.props.history.goBack()}
            />,
            <FlatButton
                label="Submit"
                type="submit"
                form="addproductform"
                primary={true}
                keyboardFocused={true}
                //onClick={this.newProduct}
            />,
        ];
        return (
            <div>
                {
                    this.props.products.map( (product,key) => {
                        return <span>{product._id}</span>
                    })
                }
                <Dialog
                    actions={actions}
                    open={true}
                    modal={false}
                    title="Add new product"
                    onRequestClose={() => this.props.history.goBack()}
                >
                    <AddProductForm
                        handleText={this.onChangeInput}
                        onSubmit={this.submitForm}
                        {...product}
                    />
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

NewProduct = connect(mapStateToProps, {saveProduct})(NewProduct);
export default withRouter(NewProduct);
