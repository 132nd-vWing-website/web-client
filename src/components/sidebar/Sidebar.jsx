import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style/css';
import React from 'react';
import Logo from '../../img/132nd-logo-web-100.png';

// Contexts
import { AuthContext } from '../auth/AuthContext';

// Menus
import AuthBar from './AuthBar';
import GuestBar from './GuestBar';

// Antd deconstruction
const { Sider } = Layout;

export default function Sidebar() {
  const { currentUser } = React.useContext(AuthContext);

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
      {currentUser ? <AuthBar /> : <GuestBar />}
    </Sider>
  );
}
