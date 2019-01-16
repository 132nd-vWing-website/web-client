/* eslint no-console: 0 */
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import { Layout } from 'antd';
import Sidebar from './components/sidebar/Sidebar';

// Redux Store
import store from './store';

// Redux Actions
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { getUnreadNotams } from './actions/postActions';

// Public Routes
import HeaderCarousel from './components/headercarousel/HeaderCarousel';
import Landing from './components/landing/Landing';
import Register from './components/registration/Register';
import Login from './components/auth/Login';
import Events from './components/events/Events';

// Private Routes
import PrivateRoute from './components/auth/PrivateRoute';
import ProfileDashboard from './components/profile-dashboard/ProfileDashboard';

// Utils
import setAuthToken from './utils/setAuthToken';

const { Header, Content, Footer } = Layout;

/**
 * Check for token to keep a loged in user authenticated
 */
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info
  const decoded = jwtDecode(localStorage.jwtToken);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Get all NOTAMs
  store.dispatch(getUnreadNotams());

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

/**
 * App Component
 */
function App() {
  console.log('App reloaded at ', new Date());
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout style={{ background: '#272727' }}>
            <HeaderComponent />
            <Content style={{ margin: '1em 1em 0' }}>
              <Route exact path='/' component={Landing} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route path='/events' component={Events} />
              <Switch>
                <PrivateRoute exact path='/dashboard' component={ProfileDashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/create-profile'
                  component={<div>CREATE A PROFILE</div>}
                />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center', background: '#272727', color: '#aaa' }}>
              132nd Virtual Wing ©2019
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

/**
 * Header Component
 */
const HeaderComponent = () => (
  <Header style={{ background: '#fff', padding: 0, minHeight: '350px', margin: '1em 1em 0' }}>
    <HeaderCarousel />
  </Header>
);

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
