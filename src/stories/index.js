import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import BButton from '../components/Button';
import Login from '../components/Login';
import Register from '../components/Register';
import ConnectBox from '../components/ConnectBox';
import NavBar from '../components/NavBar';

// icons
import Beer from 'react-icons/lib/ti/beer';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button', 'with some emoji')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('BrestJS', module)
  .add('button', ()=><BButton kind='primary' onClick={action('clicked')} title="Hello BrestJS" icon={Beer} />)
  .add('button2', ()=><BButton kind='danger' onClick={action('clicked')} title="Hello BrestJS" icon={Beer} />)
  .add('Login', ()=>( <Login /> ))
  .add('Register', ()=>( <Register /> ))
  .add('Connect box', ()=>( <ConnectBox /> ))
  .add('Nav', ()=>( <NavBar /> ))
  
storiesOf('B Button', module)
  .add('primary', ()=><BButton kind='primary' onClick={action('clicked')} title="Hello BrestJS" icon={Beer} />)
  .add('secondary', ()=><BButton kind='secondary' onClick={linkTo('B Button','danger')} title="Hello BrestJS" icon={Beer} />)
  .add('danger', ()=><BButton kind='danger' onClick={action('clicked')} title="Hello BrestJS" icon={Beer} />)
  
storiesOf('Connect', module)
  .add('Login', ()=>( <Login /> ))
  .add('Register', ()=>( <Register /> ))
  .add('Connect box', ()=>( <ConnectBox /> ))
  