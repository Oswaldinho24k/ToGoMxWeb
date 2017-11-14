import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StoreInventoryDisplay} from './StoreInventoryDisplay';
import {Drawer, List, ListItem, Divider, CircularProgress} from 'material-ui';
import {Route, Link} from 'react-router-dom';
//icons
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import {indigo500} from 'material-ui/styles/colors';

//redux
import {stockAddOne} from "../../redux/actions/stockActions";
//watchers
import {productosStockWatcher} from "../../watchers/misTiendasWatcher";


class StoreInventory extends Component {


    state = {
        openDrawer:true,
        myStoreId:this.props.match.params.myStoreId,
        items:[]
    };


    abarrotes = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/abarrotes/limpieza"}/>}
            primaryText="Limpieza" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/abarrotes/despensa"}/>}
            primaryText="Despensa" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/abarrotes/higiene-personal"}/>}
            primaryText="Higiene Personal" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/abarrotes/mascotas"}/>}
            primaryText="Mascotas" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];


    dulceria = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/dilceria/chicles"}/>}
            primaryText="Chicles" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/dilceria/chocolates"}/>}
            primaryText="Chocolates" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/dilceria/dulces"}/>}
            primaryText="Dulces" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

    botanas = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/botanas/papas-y-cheetos"}/>}
            primaryText="Papas y cheetos" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/botanas/cacahuates-y-mas"}/>}
            primaryText="Cacahuates y más" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/botanas/panaderia-y-galletas"}/>}
            primaryText="Panadería y Galletas" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

    bebidas = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/tiendita/bebidas/agua"}/>}
            primaryText="Agua" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/tiendita/bebidas/lacteos"}/>}
            primaryText="Lácteos" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/tiendita/bebidas/energeticos"}/>}
            primaryText="Energéticos" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/tiendita/bebidas/jugos"}/>}
            primaryText="Jugos" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/tiendita/bebidas/cervezas"}/>}
            primaryText="Cervezas" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/tiendita/bebidas/refrescos"}/>}
            primaryText="Refrescos" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

    tiendita = [
        <ListItem
            nestedListStyle={{backgroundColor:"darkgrey"}}
            nestedItems={this.bebidas}
            primaryText="Bebidas" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            nestedListStyle={{backgroundColor:"darkgrey"}}
            nestedItems={this.botanas}
            primaryText="Botanas" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            nestedListStyle={{backgroundColor:"darkgrey"}}
            nestedItems={this.dulceria}
            primaryText="Dulcería" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            nestedListStyle={{backgroundColor:"darkgrey"}}
            nestedItems={this.abarrotes}
            primaryText="Abarrotes" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

//

    licores = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/licores/vodka"}/>}
            primaryText="Vodka" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/licores/ron"}/>}
            primaryText="Ron" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/licores/whiskey"}/>}
            primaryText="Whiskey" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/licores/ginebra"}/>}
            primaryText="Ginebra" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/licores/brandy"}/>}
            primaryText="Brandy" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/licores/tequila"}/>}
            primaryText="Tequila" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

    vinos = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/vinos/vino-blanco"}/>}
            primaryText="Vino Blanco" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/vinos/vino-tinto"}/>}
            primaryText="Vino tinto" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/vinateria/vino/rosado"}/>}
            primaryText="Vino rosado" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

    vinateria = [
        <ListItem
            nestedListStyle={{backgroundColor:"darkgrey"}}
            nestedItems={this.vinos}
            primaryText="Vinos" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            nestedListStyle={{backgroundColor:"darkgrey"}}
            nestedItems={this.licores}
            primaryText="Licores" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            primaryText="Cervezas" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            primaryText="Hielos" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];


    farmacia = [
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/farmacia/leche-y-suplementos"}/>}
            primaryText="Leche y Suplementos" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/farmacia/mama-y-bebe"}/>}
            primaryText="Mamá y Bebé" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/farmacia/medicamento-otc"}/>}
            primaryText="Medicamento OTC" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/farmacia/panales"}/>}
            primaryText="Pañales" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/farmacia/salud-sexual"}/>}
            primaryText="Salud Sexual" leftIcon={<RemoveRedEye color={indigo500} />} />,
        <ListItem
            containerElement={<Link to={"/"+this.state.myStoreId+"/inventario/farmacia/salud-y-belleza"}/>}
            primaryText="Salud y Belleza" leftIcon={<RemoveRedEye color={indigo500} />} />,
    ];

    componentWillMount(){
        productosStockWatcher(this.state.myStoreId);
    }

    componentWillReceiveProps(p){
        if(p !== this.props)
            this.matchCategory(p.match, p.location, p.products);
    }

    matchCategory = (match, location, products) => {
        const cat = location.pathname.replace("/"+match.params.myStoreId, "");
        let items = products.filter(p=>p.category === cat);
        this.setState({items});

        //console.log(cat, products[0].category);
        //console.log(cat === products[0].category);
        //console.log(items);
    };

    render() {
        const {openDrawer} = this.state;
        const {fetched} = this.props;
        if(!fetched) return <CircularProgress/>;
        return (
            <div>
                <Drawer open={openDrawer}>
                    <List

                    >
                        <ListItem
                            nestedListStyle={{backgroundColor:"lightgrey"}}
                            nestedItems={this.tiendita}
                            primaryText="Tiendita" leftIcon={<RemoveRedEye color={indigo500} />} />
                        <ListItem
                            nestedListStyle={{backgroundColor:"lightgrey"}}
                            nestedItems={this.farmacia}
                            primaryText="Farmacia" leftIcon={<PersonAdd color={indigo500} />} />
                        <Divider />
                        <ListItem
                            nestedListStyle={{backgroundColor:"lightgrey"}}
                            nestedItems={this.vinateria}
                            primaryText="Vinatería" leftIcon={<ContentLink color={indigo500} />} />
                        <Divider />
                        <ListItem primaryText="Pago de Servicios" leftIcon={<ContentCopy color={indigo500} />} />
                    </List>
                </Drawer>
                <h2>Productos:</h2>
                <div style={{paddingLeft:256}}>
                <Route path=":category" children={()=><StoreInventoryDisplay
                                                            stock={this.props.stock}
                                                            myStoreId={this.state.myStoreId}
                                                            items={this.state.items}
                                                            stockAddOne={this.props.stockAddOne}
                                                        />} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log(state.stock.stock);
    return {
        stock:state.stock.stock,
        products: state.products,
        fetched:state.products.length > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stockAddOne: bindActionCreators(stockAddOne, dispatch)
    };
}

export default StoreInventory = connect(mapStateToProps, mapDispatchToProps)(StoreInventory);