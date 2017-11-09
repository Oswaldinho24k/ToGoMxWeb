import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RaisedButton} from 'material-ui';
import * as actions from '../../redux/actions/notificationActions';

class AdminPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    enviarNoti=(key)=>{
        let noti={
            visto:false,
            tiendaId:key,
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
        console.log(this.props.tiendas)
        return (
            <div>
                {this.props.tiendas.map(tienda=>{
                    return(
                        <div>
                            <RaisedButton onClick={()=>this.enviarNoti(tienda.owner)}>{tienda.title}</RaisedButton>
                            <br/>

                        </div>
                    )
                })}

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        tiendas:state.tiendas,
        fetched:state.tiendas!==undefined
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

AdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);
export default AdminPage
