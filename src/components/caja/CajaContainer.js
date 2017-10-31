import React, {Component} from 'react';
import CajaComponent from './CajaComponent';

class CajaContainer extends Component {
    constructor(props) {
        super(props);
        this.state =  {

        };
    }

    render() {
        return (
            <div>
                <CajaComponent/>
            </div>
        );
    }
}

export default CajaContainer;