import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Notifications extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props.notifications);
        return (
            <div>
                las notis
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
