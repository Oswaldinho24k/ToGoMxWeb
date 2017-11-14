import React, { Component } from 'react';
import './Slide.css';
import Btn from './Btn';

export const SlideDisplay = () => {
    return (
        <div className="slide">
            <div className="slogan">
                <h1>La tienda de la esquina en la palma de tu mano</h1>
                <p>Encuentra todo lo que necesitas</p>
                <div className="btn_box">
                    <Btn text="Ordenar ya"/>
                </div>
            </div>
        </div>
    );
}
