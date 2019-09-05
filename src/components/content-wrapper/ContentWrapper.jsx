import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style/css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../auth/PrivateRoute';
import Landing from '../landing/Landing';
import PDFPagesProvider from '../pdf/PDFPagesProvider';
import Taskings from '../taskings/Taskings';

import Register from '../registration/Register'; // OLD!!
import RegisterAccount from '../register-account';

import { FlightplanProvider } from '../flightplanner/FlightplanContext';

const { Content } = Layout;

const TaskingEditor = React.lazy(() =>
  import(/* webpackChunkName: "jsx-tasking" */ '../tasking-editor/TaskingEditor'),
);

export default function ContentsWrapper() {
  return (
    <Content style={{ margin: '1em 1em 0' }}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={RegisterAccount} />
        <Route exact path='/login' component={Register} />
        {/* <Route exact path='/login' component={Login} /> */}

        {/* <Route path='/events' component={Events} /> */}
        <Route path='/events' component={() => TaskingEditor} />
        {/* <Route path='/taskings' component={Taskings} /> */}
        <Route path='/taskings' component={FlightplanProvider} />
        {/* <Route
          path='/taskings'
          render={() => (
            <PDFPagesProvider>
              <TaskingEditor />
            </PDFPagesProvider>
          )}
        /> */}
        <Route component={Landing} />
      </Switch>
      <Switch>{/* <PrivateRoute exact path='/dashboard' component={ProfileDashboard} /> */}</Switch>
      <Switch>
        {/* <PrivateRoute exact path='/create-profile' component={<div>CREATE A PROFILE</div>} /> */}
      </Switch>
    </Content>
  );
}
