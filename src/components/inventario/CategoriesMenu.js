import React from 'react';
import {List, ListItem, Subheader, Divider} from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Farm from 'material-ui/svg-icons/content/add-box';
import Tiendita from 'material-ui/svg-icons/action/store';
import LocalBar from 'material-ui/svg-icons/maps/local-bar';
import {Link} from 'react-router-dom';


const CategoriesMenu = ({history, match}) => {
    return (
        <div>
            <List>
                <Subheader>Categorías</Subheader>
                <Divider/>
                <ListItem
                    primaryText="Tiendita"
                    leftIcon={<Tiendita />}
                    disabled={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Bebidas"
                            leftIcon={<ActionGrade />}
                            disabled={true}
                            nestedListStyle={{marginLeft:'20%'}}
                            nestedItems={[
                                <Link key={1} to="/inventario/tiendita/bebidas/agua"><ListItem key={1} primaryText="Agua" leftIcon={<ContentDrafts />} /></Link>,
                                <Link key={2} to="/inventario/tiendita/bebidas/lacteos"><ListItem key={2} primaryText="Lácteos" leftIcon={<ContentDrafts />} /></Link>,
                                <Link key={3} to="/inventario/tiendita/bebidas/energeticos"><ListItem key={3} primaryText="Energéticos" leftIcon={<ContentDrafts />} /></Link>,
                                <Link key={4} to="/inventario/tiendita/bebidas/jugos"><ListItem key={4} primaryText="Jugos" leftIcon={<ContentDrafts />} /></Link>,
                                <Link key={5} to="/inventario/tiendita/bebidas/cervezas"><ListItem key={5} primaryText="Cervezas" leftIcon={<ContentDrafts />} /></Link>,
                                <Link key={6} to="/inventario/tiendita/bebidas/refrescos"><ListItem key={6} primaryText="Refrescos" leftIcon={<ContentDrafts />} /></Link>,
                            ]}
                        />,
                        <ListItem
                            key={2}
                            primaryText="Botanas"
                            leftIcon={<ContentSend />}
                            disabled={true}
                            nestedListStyle={{marginLeft:'20%'}}
                            nestedItems={[
                                <Link to="/inventario/tiendita/botanas/papas"><ListItem key={1} primaryText="Papas" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/tiendita/botanas/cacahuates-y-mas"><ListItem key={2} primaryText="Cacahuates y más" leftIcon={<ContentDrafts />} /></Link>,
                                <Link to="/inventario/tiendita/botanas/panaderia-y-galletas"><ListItem key={3} primaryText="Panadería y Galletas" leftIcon={<ContentDrafts />} /></Link>,
                            ]}
                        />,
                        <ListItem
                            key={3}
                            primaryText="Dulcería"
                            leftIcon={<ContentInbox />}
                            disabled={true}
                            nestedListStyle={{marginLeft:'20%'}}
                            nestedItems={[
                                <Link to="/inventario/tiendita/dulceria/chicles"><ListItem key={1} primaryText="Chicles" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/tiendita/dulceria/chocolates"><ListItem key={2} primaryText="Chocolates" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/tiendita/dulceria/dulces"><ListItem key={3} primaryText="Dulces" leftIcon={<ContentDrafts />}/></Link>,
                            ]}
                        />,
                        <ListItem
                            key={4}
                            primaryText="Abarrotes"
                            leftIcon={<ContentInbox />}
                            disabled={true}
                            nestedListStyle={{marginLeft:'20%'}}
                            nestedItems={[
                                <Link to="/inventario/tiendita/abarrotes/limpieza"><ListItem key={1} primaryText="Limpieza" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/tiendita/abarrotes/despensa"><ListItem key={2} primaryText="Despensa" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/tiendita/abarrotes/higiene-personal"><ListItem key={3} primaryText="Higiene Personal" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/tiendita/abarrotes/mascotas"><ListItem key={4} primaryText="Mascotas" leftIcon={<ContentDrafts />}/></Link>,
                            ]}
                        />,
                    ]}/>
                <ListItem
                    primaryText="Farmacia"
                    leftIcon={<Farm />}
                    disabled={true}
                    nestedListStyle={{marginLeft:'10%'}}
                    nestedItems={[
                        <Link to="/inventario/farmacia/leches-y-suplementos"><ListItem key={1} primaryText="Leches y Suplementos" leftIcon={<ContentDrafts />}/></Link>,
                        <Link to="/inventario/farmacia/mama-y-bebe"><ListItem key={2} primaryText="Mamá y bebé" leftIcon={<ContentDrafts />}/></Link>,
                        <Link to="/inventario/farmacia/medicamento-otc"><ListItem key={3} primaryText="Medicamento OTC" leftIcon={<ContentDrafts />}/></Link>,
                        <Link to="/inventario/farmacia/panales"><ListItem key={4} primaryText="Pañales" leftIcon={<ContentDrafts />}/></Link>,
                        <Link to="/inventario/farmacia/salud-sexual"><ListItem key={5} primaryText="Salud Sexual" leftIcon={<ContentDrafts />}/></Link>,
                         <Link to="/inventario/farmacia/salud-y-belleza"><ListItem key={6} primaryText="Salud y Belleza" leftIcon={<ContentDrafts />}/></Link>,
                    ]}
                />
                <ListItem
                    primaryText="Vinatería"
                    disabled={true}
                    leftIcon={<LocalBar/>}
                    nestedListStyle={{marginLeft:'10%'}}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Vinos"
                            disabled={true}
                            leftIcon={<ActionGrade />}
                            nestedListStyle={{marginLeft:'20%'}}
                            nestedItems={[
                                <Link to="/inventario/vinateria/vinos/vino-blanco"><ListItem key={1} primaryText="Vino Blanco" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/vinos/vino-tinto"><ListItem key={2} primaryText="Vino tinto" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/vinos/vino-rosado"><ListItem key={3} primaryText="Vino Rosado" leftIcon={<ContentDrafts />}/></Link>,

                            ]}
                        />,
                        <ListItem
                            key={2}
                            primaryText="Licores"
                            leftIcon={<ContentSend />}
                            disabled={true}
                            nestedListStyle={{marginLeft:'20%'}}
                            nestedItems={[
                                <Link to="/inventario/vinateria/licores/vodka"><ListItem key={1} primaryText="Vodka" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/licores/ron"><ListItem key={2} primaryText="Ron" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/licores/whiskey"><ListItem key={3} primaryText="Whiskey" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/licores/ginebra"><ListItem key={4} primaryText="Ginebra" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/licores/brandy"><ListItem key={5} primaryText="Brandy" leftIcon={<ContentDrafts />}/></Link>,
                                <Link to="/inventario/vinateria/licores/tequila"><ListItem key={6} primaryText="Tequila" leftIcon={<ContentDrafts />}/></Link>,
                            ]}
                        />,
                        <Link to="/inventario/vinateria/cerveza"><ListItem key={3} primaryText="Cerveza" leftIcon={<ContentDrafts />}/></Link>,
                        <Link to="/inventario/vinateria/hielo"><ListItem key={4} primaryText="Hielo" leftIcon={<ContentDrafts />}/></Link>,
                    ]}/>
                <Link to="/inventario/pago-de-servicios"><ListItem primaryText="Pago de Servicios" leftIcon={<ContentDrafts />}/></Link>
            </List>
        </div>
    )
};

export default CategoriesMenu;