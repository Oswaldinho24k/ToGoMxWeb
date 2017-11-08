//import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PerfilDisplay} from './PerfilDisplay';

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

const PerfilPage = connect(mapStateToProps, mapDispatchToProps)(PerfilDisplay);
export default PerfilPage;