import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style/css';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { logoutUser, setCurrentUser } from './actions/authActions';
import { getUnreadNotams } from './actions/postActions';
import { clearCurrentProfile } from './actions/profileActions';
import './App.css';
import PrivateRoute from './components/auth/PrivateRoute';
import Landing from './components/landing/Landing';
import Sidebar from './components/sidebar/Sidebar';
import MissionDataProvider from './contexts/MissionData';
import store from './store';
import setAuthToken from './utils/setAuthToken';
// import SkeletonLoader from './components/loaders/SkeletonLoader';
import Spinner from './components/loaders/Spinner';

const { Header, Content, Footer } = Layout;

// const LoadingComponent = <SkeletonLoader active />;
const LoadingComponent = <Spinner />;

const Tasking = React.lazy(() => import('./components/taskings/Tasking'));

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
export default function App() {
  console.log('App reloaded at ', new Date());

  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);

  // Triggers CSS rule .loader:empty
  if (loading) return null;

  return (
    <Provider store={store}>
      <MissionDataProvider>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout style={{ background: '#272727' }}>
              {/* <HeaderComponent /> */}
              <Content style={{ margin: '1em 1em 0' }}>
                <React.Suspense fallback={LoadingComponent}>
                  <Switch>
                    <Route exact path='/' component={Landing} />
                    {/* <Route exact path='/register' component={Register} /> */}
                    {/* <Route exact path='/login' component={Login} /> */}
                    {/* <Route path='/events' component={Events} /> */}
                    <Route path='/taskings' component={Tasking} />
                    <Route component={Landing} />
                  </Switch>
                  <Switch>
                    {/* <PrivateRoute exact path='/dashboard' component={ProfileDashboard} /> */}
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path='/create-profile'
                      component={<div>CREATE A PROFILE</div>}
                    />
                  </Switch>
                </React.Suspense>
              </Content>
              <Footer style={{ textAlign: 'center', background: '#272727', color: '#aaa' }}>
                132nd Virtual Wing ©2019
              </Footer>
            </Layout>
          </Layout>
        </Router>
      </MissionDataProvider>
    </Provider>
  );
}
