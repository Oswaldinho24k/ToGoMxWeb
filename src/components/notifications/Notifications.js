import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'sweetalert2';
import alertify from 'alertify.js';
import * as notificationsActions from '../../redux/actions/notificationActions';

class Notifications extends Component {
    constructor(props, context) {
        super(props, context);
    }

    monAlert = (notification) =>{
        let itemsList = notification.items.map( (item,key) => {
            return `<li key=${key}>${item.product.name}</li>`;
        }).join('');
        const msg = `<h3>¡Hola! ¿Tienes los siguientes productos?</h3> ` +
            `<ul>${itemsList}</ul>`;
        console.log('msg', msg);

        alertify
            .okBtn('Si Tengo')
            .cancelBtn('No Tengo')
            .confirm(msg,  () => {
                console.log("voy");
                notification['has']=true;
                this.props.notificationsActions.markAsRead(notification);
            },  () => {
                console.log('no voy');
                notification['has']=false;
                this.props.notificationsActions.markAsRead(notification);
            });
    };

    render() {
        console.log(this.props.notifications);
        if( this.props.notifications !== undefined && this.props.notificationsActions !== undefined) {
            for (let notification of this.props.notifications) {
                this.monAlert(notification);
            }
        }
        return (
            <div>

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    console.log('notis', state.alertas)
    return {
        notifications:state.alertas,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        notificationsActions: bindActionCreators(notificationsActions, dispatch)
    }
}

Notifications = connect(mapStateToProps, mapDispatchToProps)(Notifications);
export default Notifications;
