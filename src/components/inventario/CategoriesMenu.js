import React from 'react';
import {List, ListItem, Subheader, Divider} from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import {Link} from 'react-router-dom';


const CategoriesMenu = ({history, match}) => {
    return (
        <div>
            <List>
                <Subheader>Categorías</Subheader>
                <Divider/>
                <ListItem
                    primaryText="Tiendita"
                    leftIcon={<ContentSend />}
                    disabled={true}

                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Bebidas"
                            leftIcon={<ActionGrade />}
                            disabled={true}

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
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Papas"
                                    leftIcon={<ContentDrafts />}/>,
                                <ListItem key={2} primaryText="Cacahuates y más" leftIcon={<ContentDrafts />} />,
                                <ListItem key={3} primaryText="Panadería y Galletas" leftIcon={<ContentDrafts />} />,
                            ]}
                        />,
                        <ListItem
                            key={3}
                            primaryText="Dulcería"
                            leftIcon={<ContentInbox />}
                            disabled={true}
                            nestedItems={[
                                <ListItem key={1} primaryText="Chicles" leftIcon={<ContentDrafts />} />,
                                <ListItem key={2} primaryText="Chocolates" leftIcon={<ContentDrafts />} />,
                                <ListItem key={3} primaryText="Dulces" leftIcon={<ContentDrafts />} />,
                            ]}
                        />,
                        <ListItem
                            key={4}
                            primaryText="Abarrotes"
                            leftIcon={<ContentInbox />}
                            disabled={true}
                            nestedItems={[
                                <ListItem key={1} primaryText="Limpieza" leftIcon={<ContentDrafts />} />,
                                <ListItem key={2} primaryText="Despensa" leftIcon={<ContentDrafts />} />,
                                <ListItem key={3} primaryText="Higiene Personal" leftIcon={<ContentDrafts />} />,
                                <ListItem key={4} primaryText="Mascotas" leftIcon={<ContentDrafts />} />,
                            ]}
                        />,
                    ]}/>
                <ListItem
                    primaryText="Farmacia"
                    leftIcon={<ContentInbox />}
                    disabled={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Leches y Suplementos"
                            leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                            key={2}
                            primaryText="Mamá y Bebé"
                            leftIcon={<ContentSend />}


                        />,
                        <ListItem
                            key={3}
                            primaryText="Medicamento OTC"
                            leftIcon={<ContentInbox />}


                        />,
                        <ListItem
                            key={4}
                            primaryText="Pañales"
                            leftIcon={<ContentInbox />}


                        />,
                        <ListItem
                            key={5}
                            primaryText="Salud Sexual"
                            leftIcon={<ContentInbox />}


                        />,
                        <ListItem
                            key={3}
                            primaryText="Salud y Belleza"
                            leftIcon={<ContentInbox />}
                            disabled={true}

                        />,
                    ]}
                />
                <ListItem
                    primaryText="Vinatería"
                    disabled={true}
                    leftIcon={<ContentSend />}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Vinos"
                            disabled={true}
                            leftIcon={<ActionGrade />}
                            nestedItems={[
                                <ListItem key={1} primaryText="Vino Blanco" leftIcon={<ContentDrafts />} />,
                                <ListItem key={2} primaryText="Vino Tinto" leftIcon={<ContentDrafts />} />,
                                <ListItem key={3} primaryText="Vino Rosado" leftIcon={<ContentDrafts />} />,

                            ]}
                        />,
                        <ListItem
                            key={2}
                            primaryText="Licores"
                            leftIcon={<ContentSend />}
                            disabled={true}
                            nestedItems={[
                                <ListItem key={1} primaryText="Vodka" leftIcon={<ContentDrafts />} />,
                                <ListItem key={2} primaryText="Ron" leftIcon={<ContentDrafts />} />,
                                <ListItem key={3} primaryText="Whiskey" leftIcon={<ContentDrafts />} />,
                                <ListItem key={4} primaryText="Ginebra" leftIcon={<ContentDrafts />} />,
                                <ListItem key={5} primaryText="Brandy" leftIcon={<ContentDrafts />} />,
                                <ListItem key={6} primaryText="Tequila" leftIcon={<ContentDrafts />} />,
                            ]}
                        />,
                        <ListItem
                            key={3}
                            primaryText="Cervezas"
                            leftIcon={<ContentSend />}

                        />,
                        <ListItem
                            key={4}
                            primaryText="Hielos"
                            leftIcon={<ContentSend />}


                        />,
                    ]}/>
                <ListItem primaryText="Pago de Servicios" leftIcon={<ContentDrafts />}/>
            </List>
        </div>
    )
};

export default CategoriesMenu;