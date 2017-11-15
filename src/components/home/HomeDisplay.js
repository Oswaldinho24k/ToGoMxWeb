import React, { Component } from 'react';
import Slide from './common/Slide';
import About from './common/About';
import Category from './common/Category';
import Destacado from './common/Destacado';
import Clasificados from './common/Clasificados';
import Publi from './common/Publi';
import Public from './common/Public';
import Footer from '../footer/Footer';

export const HomeDisplay = () => {
    return (
            <div className="Home">
                <Slide />
                <About />
                <Publi />
                <Category />
                <Public />

                <Clasificados />
                <Footer />
            </div>
            );
    }
