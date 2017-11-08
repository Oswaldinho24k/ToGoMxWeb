/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';

const bliss = "http://blog.fixter.org/content/images/2017/11/bliss-3.jpg";

export const PerfilDisplay = ({props}) => {
    return (
        <div>
            <div className="profile-cover">
                <button>Change Cover</button>
                <img src={bliss} alt=""/>
            </div>
        </div>
    );
};

//PerfilDisplay.propTypes = {};

const styles = {
    name: {}
};

