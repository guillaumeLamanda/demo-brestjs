import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Tab } from 'semantic-ui-react'

import Login from './Login';
import Register from './Register';

const ConnectBox = (props) => {

    const panes = [
        {menuItem: 'Login', render:()=> <Login /> },
        {menuItem: 'Register', render:()=> <Register dark />}
    ]

    return(
        <Card>
        <Card.Content>
          <Card.Description>
              <Tab panes={panes} />
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

export default ConnectBox;