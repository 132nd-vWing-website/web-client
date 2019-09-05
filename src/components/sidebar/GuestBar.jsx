import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import 'antd/lib/layout/style/css';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';
import { Link } from 'react-router-dom';
import React from 'react';

// Antd deconstruction
const { SubMenu } = Menu;

export default function GuestBar() {
  const FlySubmenuTitle = (
    <span>
      <Icon type='compass' />
      <span className='nav-text'>Go fly!</span>
    </span>
  );

  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['4']}
      defaultOpenKeys={['FlySubmenu']}
      style={{ marginTop: '3em' }}>
      <Menu.Item key='1'>
        <Link to='/register'>
          <Icon type='plus' />
          <span className='nav-text'>Sign Up</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/login'>
          <Icon type='user' />
          <span className='nav-text'>Login</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/'>
          <Icon type='home' />
          <span className='nav-text'>Home</span>
        </Link>
      </Menu.Item>
      <SubMenu key='FlySubmenu' title={FlySubmenuTitle}>
        <Menu.Item key='FlySubmenu_1'>
          <Link to='/events'>
            <Icon type='compass' />
            <span className='nav-text'>Events</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='FlySubmenu_2'>
          <Link to='/taskings'>
            <Icon type='form' />
            <span className='nav-text'>Taskings</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='FlySubmenu_3'>
          <Link to='/events'>
            <Icon type='table' />
            <span className='nav-text'>View ATO</span>
          </Link>
        </Menu.Item>
      </SubMenu>
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
