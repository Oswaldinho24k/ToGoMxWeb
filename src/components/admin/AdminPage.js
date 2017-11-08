import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RaisedButton} from 'material-ui';
import * as actions from '../../redux/actions/notificationActions';

class AdminPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    enviarNoti=()=>{
        let noti={
            tiendaId:'-KySKSf5kuiiCj_ISqHR',
            items:[
                {producto:'refresco',
                cantidad:2},
                {producto:'sabritas',
                cantidad:5}
            ]
        };
        this.props.actions.newNotification(noti)
            .then(r=>{
            console.log('enviada')
        }).catch(e=>{
            console.log(e)
        })
    };

    render() {
        return (
            <div>
                <RaisedButton onClick={this.enviarNoti}>Enviar</RaisedButton>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

AdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);
export default AdminPage
