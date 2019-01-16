import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import moment from 'moment';

import { Card, Row, Col, Spin, Table } from 'antd';

/* Redux Actions */
import { getAllEvents } from '../../actions/eventActions';

class Events extends Component {
  componentDidMount() {
    const { fetchAllEvents } = this.props;
    fetchAllEvents(100, true);
  }

  formatTime(timestamp) {
    return moment
      .unix(timestamp)
      .utc()
      .format('ddd DD MMM YYYY HH:mm[Z]')
      .toUpperCase();
  }

  render() {
    const { events, match } = this.props;
    let content;

    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
    ];

    const dataSource = [];
    if (events.all) {
      events.all.forEach((event) => {
        dataSource.push({
          key: event.event_id,
          date: this.formatTime(event.ev_ctime),
          title: <Link to={`${match.url}/event?id=${event.event_id}`}>{event.ev_title}</Link>,
        });
      });

      content = <Table dataSource={dataSource} columns={columns} />;
    } else {
      content = (
        <div style={{ minWidth: '100%', textAlign: 'center' }}>
          <Spin />
        </div>
      );
    }

    return (
      <Card title='Event Schedule'>
        <Row>
          <Col className='gutter-row' span={24} md={24}>
            <p>
              This is a listing of upcoming 132nd hosted events. Click on an event title to view
              details and sign up.
            </p>
            {content}
          </Col>
        </Row>
      </Card>
    );
  }
}

Events.propTypes = {
  fetchAllEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(
  mapStateToProps,
  { fetchAllEvents: getAllEvents },
)(Events);
