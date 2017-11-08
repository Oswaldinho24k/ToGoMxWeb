import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'sweetalert2';

class Notifications extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props.notifications);
        return (
            <div>
                {this.props.notifications.map((n, key)=>{
                    return(
                        <p key={key}>{n.key}</p>

                    )
                })}
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
