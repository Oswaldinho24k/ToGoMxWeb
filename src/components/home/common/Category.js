import React, { Component } from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div >
                <div className="cat">
                    <div className="sect">
                        <h3 className="titulos">Ulala</h3>
                        <p className="texto">Togomx" ofrece un servicio de comercio electrónico y entrega bajo demanda de
                            productos que los consumidores normalmente encuentran en tiendas de abarrotes o
                            misceláneas. Esto permite al consumidor adquirir cualquier producto sin necesidad
                            de salir de casa o desplazarse del lugar donde se encuentre, y al mismo tiempo,
                            que este tipo de comercios se integren a nuevos modelos de negocios basados en
                            la era digital.</p>
                        <p className="texto">Togomx" ofrece un servicio de comercio electrónico y entrega bajo demanda de
                            productos que los consumidores normalmente encuentran en tiendas de abarrotes o
                            misceláneas. Esto permite al consumidor adquirir cualquier producto sin necesidad
                            de salir de casa o desplazarse del lugar donde se encuentre, y al mismo tiempo,
                            que este tipo de comercios se integren a nuevos modelos de negocios basados en
                            la era digital.</p>
                    </div>
                    <div className="sect">
                        <img src="https://images.pexels.com/photos/346748/pexels-photo-346748.jpeg?h=350&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;/**
 * Created by brendaortega on 01/11/17.
 */
