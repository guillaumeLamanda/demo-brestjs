import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Tab } from 'semantic-ui-react'

import Login from './Login';
import Register from './Register';

class ConnectBox extends React.Component {
    render = () =>{
        
        const panes = [
            {menuItem: 'Login', render:()=><Tab.Pane attached={false}><Login fLogin={this.props.login} /></Tab.Pane>},
            {menuItem: 'Register', render:()=><Tab.Pane attached={false}> <Register fRegister={this.props.register} /> </Tab.Pane>}
        ]
    
        return(
            <Tab panes={panes} />
        )
    }
}

ConnectBox.propTypes = {
    fLogin: PropTypes.func.isRequired,
    fRegister: PropTypes.func.isRequired
}

export default ConnectBox;