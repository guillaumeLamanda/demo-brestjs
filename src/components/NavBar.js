import React, { Component } from 'react'
import { Menu, Modal, Image } from 'semantic-ui-react'
import ConnectBox from './ConnectBox';

export default class Navbar extends Component {
  state = { activeItem: 'acceuil', isOpen:false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu size='large' color='black' fixed='top' pointing secondary>
            <Menu.Header>
                <img width="60" src='./brestJS.png' />
            </Menu.Header>
            <Menu.Item name='acceuil' active={activeItem === 'acceuil'} onClick={this.handleItemClick} />
            <Menu.Item name='conferences' active={activeItem === 'conferences'} onClick={this.handleItemClick} />
            <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
                {
                    this.props.user===null ? 
                        <Modal size='mini' trigger={<Menu.Item icon={{name:'user', size:'big', color:'yellow'}} onClick={()=>this.setState({isOpen:true})} />} > 
                            <Modal.Content>
                                <ConnectBox />
                            </Modal.Content>
                        </Modal>
                    : 
                    <div>
                        <Image centered avatar shape='circular' verticalAlign='middle' src={this.props.user.img} />
                    </div>
                }
            </Menu.Menu>
        </Menu>
    )
  }
}