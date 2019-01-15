import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Redux Actions */
import { getAllEvents } from '../../actions/eventActions';

class Events extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    const { fetchAllEvents } = this.props;
    fetchAllEvents(50, true);
  }

  render() {
    console.log(this.props.events);
    return <div />;
  }
}

Events.propTypes = {
  fetchAllEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(
  mapStateToProps,
  { fetchAllEvents: getAllEvents },
)(Events);
