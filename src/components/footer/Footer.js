import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="divider">
                    <div className="img_footer">

                        <FontAwesome name='facebook-square' className='ic' size='2x'/>
                        <FontAwesome name='twitter-square' className='ic' size='2x'/>
                        <FontAwesome name='instagram' className='ic' size='2x'/>
                    </div>
                    <div className="box_footer">
                        <Link to="/about">
                            <p>Acerca de TogoMx</p>
                        </Link>
                        <Link to ="/deliver">
                            <p>Conviértete en socio repartidor</p>
                        </Link>
                        <Link to="/contacto">
                            <p>Contacto</p>
                        </Link>
                    </div>
                    <div className="box_footer">
                        <p>Zonas de Servicio</p>
                        <p>Tarifas</p>
                        <p>Preguntas frecuentes</p>
                    </div>
                </div>
                <hr className="line"/>
                <div className="apps">
                    <img className="down" src="https://static1.squarespace.com/static/57224b72e32140b3e58cfda1/t/58bf099886e6c0554808caa2/1488762349930/android.png" alt=""/>
                    <img className="down" src="https://www.brosix.com/wp-content/uploads/app_store.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default Footer;
