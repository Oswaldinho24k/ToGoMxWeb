import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'sweetalert2';

class Notifications extends Component {
    constructor(props, context) {
        super(props, context);
    }
    nel=()=>{
        console.log('mi boton')
    }
    monAlert=(n)=>{
        let lista = n.items.map( item => {
            console.log(item);
            return `<li>${item.producto}</li>`
        }).join('');
        let dismiss='';


        return {
            html: `<ul>${lista}</ul>`,
            title: "Tienes o me voy con el vecino",
            timer: 5000,
            allowOutsideClick: false,
            type: 'question',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'simón, jalate!',
            cancelButtonText:'Nel ni madres',

        };
    };

    render() {
        console.log(this.props.notifications);
        let modals=[];
        for(let notification of this.props.notifications){
           modals.push(this.monAlert(notification));
        }
        swal.queue(modals);

        return (
            <div>
                holi
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        notifications:state.alertas,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
