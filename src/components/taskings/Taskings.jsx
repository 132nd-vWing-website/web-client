import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PDFPagesProvider from '../pdf/PDFPagesProvider';
import TaskingList from './TaskingList';
import TaskingsProvider from './TaskingsContext';
import AircraftTypesProvider from '../../contexts/AircraftTypes';
import AirfieldProvider from '../../contexts/Airfields';

const TaskingEditor = React.lazy(() =>
  import(/* webpackChunkName: "jsx-tasking" */ '../tasking-editor/TaskingEditor'),
);

/**
 * EVENTS LIST COMPONENT
 */
/* eslint react/prefer-stateless-function:0 */
export default class Taskings extends Component {
  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <AirfieldProvider>
          <AircraftTypesProvider>
            <Route
              path={`${match.path}/:id`}
              render={(props) => (
                <PDFPagesProvider>
                  <TaskingEditor {...props} />
                </PDFPagesProvider>
              )}
            />
            <Route
              exact
              path={match.path}
              render={(props) => (
                <TaskingsProvider>
                  <TaskingList {...props} activeOnly />
                </TaskingsProvider>
              )}
            />
          </AircraftTypesProvider>
        </AirfieldProvider>
      </React.Fragment>
    );
  }
}

Taskings.propTypes = {
  match: PropTypes.object.isRequired,
};
