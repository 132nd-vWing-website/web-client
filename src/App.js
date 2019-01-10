/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel';

import store from './store';

// import registerServiceWorker from './registerServiceWorker';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider breakpoint='lg' collapsedWidth='0'>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
            <Menu.Item key='1'>
              <Icon type='plus' />
              <span className='nav-text'>Sign Up</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='user' />
              <span className='nav-text'>Login</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='home' />
              <span className='nav-text'>Home</span>
            </Menu.Item>
            <Menu.Item key='4'>
              <Icon type='compass' />
              <span className='nav-text'>Events</span>
            </Menu.Item>
            <Menu.Item key='5'>
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
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <HeaderCarousel />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Provider>
  );
}
// function App() {
//   return (
//     <Router>
//       <Layout className='layout'>
//         <Header>
//           <div className='brand-logo'>StudioDash</div>
//           <Menu
//             theme='dark'
//             mode='horizontal'
//             defaultSelectedKeys={['1']}
//             style={{ lineHeight: '64px' }}>
//             <Menu.Item key='1'>
//               <Icon type='dashboard' theme='filled' />
//               <span>Dashboard</span>
//               <Link to='/' />
//             </Menu.Item>
//             <Menu.Item key='2'>
//               <Icon type='profile' theme='filled' />
//               <span>Navigator</span>
//               <Link to='/navigator' />
//             </Menu.Item>
//           </Menu>
//         </Header>
//         <Content style={{ padding: '0 50px ' }} xs={24}>
//           <div style={{ padding: 24, minHeight: '80vh' }}>
//             <StudioClient
//               studio={studio}
//               studioUrl={Config.applicationURL}
//               render={(client) => (
//                 <React.Fragment>
//                   <Route exact path='/dashboard' render={() => <DashboardTab client={client} />} />
//                   <Route exact path='/' render={() => <NavigatorTab client={client} />} />
//                 </React.Fragment>
//               )}
//             />
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           StudioDash ©2019 Created by Jens Kristian Hoel
//         </Footer>
//       </Layout>
//     </Router>
//   );
// }

/* eslint no-undef: 0 */
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
