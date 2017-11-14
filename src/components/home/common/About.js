import React, { Component } from 'react';
import './About.css';
import FontAwesome from 'react-fontawesome';

import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="fx space">
                    <div className="process borde">
                        <FontAwesome name='cloud-download' className='icon_about' size='3x'/>
                        <h3 >Descarga</h3>
                        <p>Descarga nuestra aplicación móvil </p>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='hand-pointer-o' className='icon_about' size='3x'/>
                        <h3>Haz tu pedido</h3>
                        <p>Pide todo lo que necesitas</p>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='credit-card' className='icon_about' size='3x'/>
                        <h3>Paga</h3>
                        <p>Paga con tarjeta de forma segura </p>
                    </div>
                    <div className="process">
                        <FontAwesome name='shopping-bag' className='icon_about' size='3x'/>
                        <h3>Recibe</h3>
                        <p>Recibe tu pedido</p>
                    </div>
                </div>
                <div className="history">
                <div className="cart">
                    <div className="cuadro">
                        <div className="cover">
                            <div className="box">
                                <div className="raya">
                                 <p>Nosotros</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="cuadro">
                        <div className="cover">
                            <div className="boxi">
                                <div className="raya">
                                    <p>Nuestra historia</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="cuadro">
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

export default About;