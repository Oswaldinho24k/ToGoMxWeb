/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';


const bliss = "http://blog.fixter.org/content/images/2017/11/bliss-3.jpg";

export const PerfilDisplay = ({props}) => {
    return (
        <div>
            <div className="profile-cover">
                <button>Cambiar Portada</button>
               <figure>
                   <img src={bliss} alt=""/>
               </figure>
                <label className="username-absolute">
                    <input name="username" placeholder="Héctor BlisS" type="text"/>
                    <p>Usa tu nombre real</p>
                </label>

            </div>
            <form className="profile-form">
                <label className="username-form">
                    <h5>Tu Nombre</h5>
                    <input placeholder="Héctor BlisS" type="text"/>
                    <p>Usa tu nombre real</p>
                </label>
                <label className="">
                    <h5>Tu EMail</h5>
                    <input placeholder="contacto@fixter.org" type="text"/>
                    <p>Lo usamos para enviarte notificaciones</p>
                </label>
                <label className="">
                    <h5>Tu dirección</h5>
                    <input placeholder="New York" type="text"/>
                    <p>Donde vives?</p>
                </label>
            </form>
        </div>
    );
};

