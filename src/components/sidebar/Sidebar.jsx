import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style/css';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';
import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import Logo from '../../img/132nd-logo-web-100.png';

const { Sider } = Layout;
const { SubMenu } = Menu;

/**
 * Sidebar Componet
 */
const Sidebar = (props) => {
  const onLogoutClick = () => {
    props.clearProfile();
    props.logUserOut();
  };

  const { auth } = props;
  const { isAuthenticated, user } = auth;

  const FlySubmenuTitle = (
    <span>
      <Icon type='compass' />
      <span className='nav-text'>Go fly!</span>
    </span>
  );

  const authLinks = (
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
            {user.name}
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item key='2' onClick={onLogoutClick}>
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

  const guestLinks = (
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

  return (
    <Sider breakpoint='lg' collapsedWidth='0' className='sider-main'>
      <div
        className='logo'
        style={{
          margin: '1em 0 0 0',
          background: `url(${Logo}) 0 0 / cover no-repeat`,
          minHeight: '200px',
        }}
      />
      {isAuthenticated ? authLinks : guestLinks}
    </Sider>
  );
};

Sidebar.propTypes = {
  logUserOut: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {
    logUserOut: logoutUser,
    clearProfile: clearCurrentProfile,
  },
)(Sidebar);
