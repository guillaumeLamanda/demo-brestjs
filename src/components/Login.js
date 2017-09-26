import React from 'react';
import {Input} from 'semantic-ui-react';
import { action } from '@storybook/addon-actions';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import Button from './Button';
import Beer from 'react-icons/lib/ti/beer';

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.props=props;
        
        this.state={
            login:'',
            password:'',
            confim:'',
        }
    }

    _onChange = (event) => {
        let name = event.target.name,
            value = event.target.value;
        // console.log('before change ', name, this.state[name], value);
        this.setState({[name]: value});
    }

    render = () => {
        return (
            <Grid  style={{ margin:0, justifyContent:'center'}}>
                <Grid.Row>
                    <Input name="login" placeholder="Login | email" icon={{name:'at'}} value={this.props.login} onChange={this._onChange}/>
                </Grid.Row>
                <Grid.Row>
                    <Input name="password" placeholder="password" type='password' icon={{name:'genderless'}} value={this.props.password} onChange={this._onChange} />
                </Grid.Row>
                <Grid.Row>
                    <Button title="login" kind='secondary' icon={Beer} />
                </Grid.Row>
            </Grid>
        );
    }
}

Login.propTypes={

}