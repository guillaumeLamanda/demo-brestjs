import React from 'react';
import {Input} from 'semantic-ui-react';
import { action } from '@storybook/addon-actions';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import Button from './Button';
import Beer from 'react-icons/lib/ti/beer';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.props=props;
        
        this.state={
            login:'',
            loginError: false,
            password:'',
            passwordError: false
        }
    }

    _onChange = (event) => {
        let name = event.target.name,
            value = event.target.value;
        // console.log('before change ', name, this.state[name], value);
        this.setState({[name]: value, loginError:false, passwordError:false});
    }

    _handleClick = () => {
        if(this.state.login==='' && this.state.password==='') return this.setState({loginError:true, passwordError:true});
        if(this.state.login===''){
            return this.setState({loginError:true});
        }
        if(this.state.password===''){
            return this.setState({passwordError:true});
        }
        this.props.fLogin(this.state.login, this.state.password)
    }

    render = () => {
        const { fLogin } = this.props;
        return (
            <Grid style={{ margin:0, justifyContent:'center'}}>
                <Grid.Row>
                    <Input name="login" placeholder={this.props.loginText} 
                        type='email' icon={{name:'at'}} value={this.state.login} 
                        error={this.state.loginError}
                        onChange={this._onChange}/>
                </Grid.Row>
                <Grid.Row>
                    <Input name="password" placeholder="password" 
                        type='password' icon={{name:'genderless'}} value={this.state.password} 
                        error={this.state.passwordError}
                        onChange={this._onChange} />
                </Grid.Row>
                <Grid.Row>
                    <Button title="login" kind='secondary' icon={Beer} 
                        onClick={this._handleClick} />
                </Grid.Row>
            </Grid>
        );
    }
}

Login.propTypes={
    fLogin: PropTypes.func,
    loginText: PropTypes.string,
}

Login.defaultProps = {
    loginText: 'login | email'
}