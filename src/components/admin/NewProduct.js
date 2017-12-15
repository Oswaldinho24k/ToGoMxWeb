import React, {Component} from 'react';
import AddProductForm from '../inventario/AddProductForm';
import {Dialog, FlatButton} from "material-ui";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveProduct} from '../../redux/actions/productsActions'
import firebase from '../../firebase';



class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name:'',
            },
            loader:false
        };
    }
    uploadPhoto=(e)=>{
        let product = this.state.product;
        let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('products/'+product.name+product.desc).put(file);
        uploadTask.then(r=>{
            console.log(r);
            product['image']=r.downloadURL;
            this.setState({product, loader:false})
        });
        uploadTask.on('state_changed', snapshot=>{
            this.setState({loader:true});
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        });

    };

    onChangeInput = (e) => {
        let product = {...this.state.product || {}} ;
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
            this.props.history.goBack()
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
                //onClick={this.product}
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
                    autoScrollBodyContent={true}
                    open={true}
                    modal={false}
                    title="Add new product"
                    onRequestClose={() => this.props.history.goBack()}
                >
                    <AddProductForm
                        handleText={this.onChangeInput}
                        onSubmit={this.submitForm}
                        uploadPhoto={this.uploadPhoto}
                        loader={this.state.loader}
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
