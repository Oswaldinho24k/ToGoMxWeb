import React, { Component } from 'react';
import './Card.css';

const Card = ({imagen}) => (

            <div className="card">
                <div className="img_box">
                    <img  className="img_card" src={imagen} alt=""/>
                </div>
                <div>
                    <h4>Cereal Nesquik</h4>
                    <p>Cereales</p>
                    <p>$40</p>
                </div>
            </div>
        );

export default Card;
