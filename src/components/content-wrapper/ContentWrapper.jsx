import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style/css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../auth/PrivateRoute';
import Landing from '../landing/Landing';

const { Content } = Layout;

// const Tasking = React.lazy(() => import('../taskings/Tasking'));

const Tasking = React.lazy(() =>
  import(/* webpackChunkName: "jsx-tasking" */ '../taskings/Tasking'),
);

export default function ContentsWrapper() {
  return (
    <Content style={{ margin: '1em 1em 0' }}>
      <Switch>
        <Route exact path='/' component={Landing} />
        {/* <Route exact path='/register' component={Register} /> */}
        {/* <Route exact path='/login' component={Login} /> */}
        {/* <Route path='/events' component={Events} /> */}
        <Route path='/taskings' render={() => <Tasking />} />
        <Route component={Landing} />
      </Switch>
      <Switch>{/* <PrivateRoute exact path='/dashboard' component={ProfileDashboard} /> */}</Switch>
      <Switch>
        {/* <PrivateRoute exact path='/create-profile' component={<div>CREATE A PROFILE</div>} /> */}
      </Switch>
    </Content>
  );
}
