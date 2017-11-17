import React, { Component } from 'react';
import './Category.css';
import FontAwesome from 'react-fontawesome';

class Categorias extends Component {
    render() {
        return (
            <div className=" space cat">
                <h2>Qué puedes encontrar?</h2>
                <div className="fx">
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/327173/pexels-photo-327173.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon' ><FontAwesome name='shopping-basket' size='1x'/></p>
                                    <span >Tiendita</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/51335/apples-kiwi-oranges-fruit-51335.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon' ><FontAwesome name='leaf' size='1x'/></p>
                                    <span >Frutas y Verduras</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='glass'  size='1x'/></p>
                                    <span >Vinatería</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/618918/pexels-photo-618918.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='map-pin'  size='1x'/></p>
                                    <span> Dulcería</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/33355/capsule-pill-health-medicine.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='medkit'  size='1x'/></p>
                                    <span> Farmacia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/220197/pexels-photo-220197.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='magic'  size='1x'/></p>
                                    <span> Servicios</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Categorias;