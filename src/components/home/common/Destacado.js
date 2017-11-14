import React, { Component } from 'react';
import './Destacado.css';
import Card from '../../card/Card';

class Destacado extends Component {
    render() {
        return (
            <div className="destacados">
                <div className="fx">
                    <div className="linea"></div>
                    <div className="encabezado titulos">Produtos Básicos</div>
                    <div className="linea"></div>
                </div>
                <br/>
                <div className="fx ">
                    <Card imagen={"https://super.walmart.com.mx/images/product-images/img_large/00750100333612L.jpg"}/>
                    <Card imagen={"https://www.nestle-cereals.com/mx/sites/g/files/qirczx241/f/styles/tablet_1024x576/public/product_gallery/nce_nq_newima_rnd.png?itok=EmmvAFLO"}/>
                    <Card imagen={"https://d2oz89p7gnm2lz.cloudfront.net/product-images/108468.jpg"} />
                    <Card imagen={"https://super.walmart.com.mx/images/product-images/img_large/00750100333612L.jpg"}/>
                    <Card imagen={"https://www.nestle-cereals.com/mx/sites/g/files/qirczx241/f/styles/tablet_1024x576/public/product_gallery/nce_nq_newima_rnd.png?itok=EmmvAFLO"}/>
                    <Card imagen={"https://d2oz89p7gnm2lz.cloudfront.net/product-images/108468.jpg"} />
                    <Card imagen={"https://super.walmart.com.mx/images/product-images/img_large/00750100333612L.jpg"}/>
                    <Card imagen={"https://www.nestle-cereals.com/mx/sites/g/files/qirczx241/f/styles/tablet_1024x576/public/product_gallery/nce_nq_newima_rnd.png?itok=EmmvAFLO"}/>
                    <Card imagen={"https://d2oz89p7gnm2lz.cloudfront.net/product-images/108468.jpg"} />

                </div>
            </div>
        );
    }
}

export default Destacado;
