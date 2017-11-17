import React, { Component } from 'react';
import './Clasificados.css';

class Destacado extends Component {
    render() {
        return (
            <div >
                <div className="history">
                    <div className="in">
                        <h2>¿Quienes somos?</h2>
                        <p>TOGOMX es una empresa mexicana dedicada a la venta
                            de productos de abarrotes, misceláneas y servicios a través de
                            nuestra aplicación móvil con servicio a domicilio.
                            <br/>
                            Nuestra principal finalidad es entregar a nuestros clientes los productos
                            que requieren con comidad, rapidez y felicidad.
                        </p>
                    </div>
                    <div className="in">
                        <img src="https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg" alt=""/>
                    </div>
                </div>
                <div className="history">
                    <div className="cart">
                        <div className="cuadros">
                            <div className="cover">
                                <div className="box">
                                    <div className="raya">
                                        <p>Nosotros</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cuadros">
                            <div className="cover">
                                <div className="boxi">
                                    <div className="raya">
                                        <p>Nuestra historia</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cuadros">
                            <div className="cover">
                                <div className="boxi">
                                    <div className="raya">
                                        <p>Responsabilidad Social</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Destacado;
/**
 * Created by brendaortega on 09/11/17.
 */
