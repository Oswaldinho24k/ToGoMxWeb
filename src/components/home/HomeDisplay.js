import React, { Component } from 'react';
import Slide from './common/Slide';
import About from './common/About';
import Category from './common/Category';
import Destacado from './common/Destacado';
import Clasificados from './common/Clasificados';

export const HomeDisplay = () => {
    return (
            <div className="Home">
                <Slide />
                <About />
                <Category />
                <Destacado />
                <Clasificados />
            </div>
            );
    }
