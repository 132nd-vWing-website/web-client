/* eslint no-console: 0 */
// UI Components
import { Layout } from 'antd';
import jwtDecode from 'jwt-decode';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux Actions
import { logoutUser, setCurrentUser } from './actions/authActions';
import { getUnreadNotams } from './actions/postActions';
import { clearCurrentProfile } from './actions/profileActions';
import './App.css';
import Login from './components/auth/Login';
// Private Routes
import PrivateRoute from './components/auth/PrivateRoute';
import Events from './components/events/Events';
// LazyLoading
// import HeaderCarousel from './components/headercarousel/HeaderCarousel';
// Public Routes
import Landing from './components/landing/Landing';
import MDCDemo from './components/pdf/MDCDemo';
import ProfileDashboard from './components/profile-dashboard/ProfileDashboard';
import Register from './components/registration/Register';
import Sidebar from './components/sidebar/Sidebar';
import Tasking from './components/taskings/Tasking';
// Context
import MissionDataProvider from './contexts/MissionData';
// Redux Store
import store from './store';
// Utils
import setAuthToken from './utils/setAuthToken';

// Lazy Loading
const LoadingComponent = <div>Loading...</div>;

// const Tasking = React.lazy(() => import('./components/taskings/Tasking'));
// const HeaderCarousel = Loadable({
//   loader: () => import('./components/headercarousel/HeaderCarousel'),
//   loading: () => LoadingComponent,
// });

// const Register = Loadable({
//   loader: () => import('./components/registration/Register'),
//   loading: () => LoadingComponent,
// });

// const Login = Loadable({
//   loader: () => import('./components/auth/Login'),
//   loading: () => LoadingComponent,
// });

// const MDCDemo = Loadable({
//   loader: () => import('./components/pdf/MDCDemo'),
//   loading: () => LoadingComponent,
// });

// const Tasking = Loadable({
//   loader: () => import('./components/taskings/Tasking'),
//   loading: () => LoadingComponent,
// });

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
    <React.Suspense fallback={LoadingComponent}>
      <Provider store={store}>
        <MissionDataProvider>
          <Router>
            <Layout style={{ minHeight: '100vh' }}>
              <Sidebar />
              <Layout style={{ background: '#272727' }}>
                {/* <HeaderComponent /> */}
                <Content style={{ margin: '1em 1em 0' }}>
                  <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route path='/events' component={Events} />
                    <Route path='/taskings' component={Tasking} />
                    <Route path='/pdf' component={MDCDemo} />
                    <Route component={Landing} />
                  </Switch>
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
        </MissionDataProvider>
      </Provider>
    </React.Suspense>
  );
}

export default App;

/**
 * Header Component
 */
// const HeaderComponent = () => (
//   <Header style={{ background: '#fff', padding: 0, minHeight: '350px', margin: '1em 1em 0' }}>
//     <HeaderCarousel />
//   </Header>
// );
