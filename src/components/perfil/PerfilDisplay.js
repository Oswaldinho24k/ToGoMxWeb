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
                    <h5>Tu teléfono</h5>
                    <input placeholder="7712343434" type="text"/>
                    <p>¿A donde podemos llamarte?</p>
                </label>
            </form>

            <form className="profile-form">
                <div className="divider"></div>
                <label>
                    <h5>Tu password Actual</h5>
                    <input type="password"/>
                </label>
                <label>
                    <h5>Tu Nuevo password</h5>
                    <input type="password"/>
                </label>
                <label>
                    <h5>Verifica tu password</h5>
                    <input type="password"/>
                </label>
                <button>
                    Cambiar Password
                </button>

            </form>
        </div>
    );
};

