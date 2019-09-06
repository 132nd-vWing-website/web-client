import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import 'antd/lib/layout/style/css';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';
import { Link } from 'react-router-dom';
import React from 'react';

// Contexts
import { AuthContext } from '../auth/AuthContext';

export default function AuthBar() {
  const { currentUser, logoutUser } = React.useContext(AuthContext);

  const { callsign } = currentUser || '';
  // const { roles } = currentUser || []; // TODO - use this to enable/disable options

  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['4']}
      defaultOpenKeys={['FlySubmenu']}
      style={{ marginTop: '3em' }}>
      <Menu.Item key='1'>
        <Link to='/dashboard'>
          <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            <Icon type='user' />
            {callsign}
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item key='2' onClick={logoutUser}>
        <Icon type='coffee' />
        <span className='nav-text'>Logout</span>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/'>
          <Icon type='home' />
          <span className='nav-text'>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='4'>
        <Link to='/events'>
          <Icon type='compass' />
          <span className='nav-text'>Go Fly!</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='5' style={{ marginTop: '3em' }}>
        <span className='nav-text'>Profiles</span>
      </Menu.Item>
      <Menu.Item key='6'>
        <span className='nav-text'>About Us</span>
      </Menu.Item>
      <Menu.Item key='7'>
        <span className='nav-text'>Squadrons</span>
      </Menu.Item>
      <Menu.Item key='8'>
        <span className='nav-text'>Recruitment</span>
      </Menu.Item>
      <Menu.Item key='9'>
        <span className='nav-text'>Contact Us</span>
      </Menu.Item>
    </Menu>
  );
}
