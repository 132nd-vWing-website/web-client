import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import moment from 'moment';

import { Card, Row, Col, Tabs, Spin } from 'antd';

import { getEvent } from '../../actions/eventActions';

import './event.css';

// LazyLoading
const MDCDemo = React.lazy(() => import('../pdf/MDCDemo'));

const { TabPane } = Tabs;

class Event extends Component {
  componentDidMount() {
    const { fetchEvent, match } = this.props;
    fetchEvent(match.params.id);
  }

  handleTabChange = (key) => {
    console.log('tabChange!', key);
  };

  eventDate(timestamp) {
    return moment
      .unix(timestamp)
      .utc()
      .format('ddd DD MMM YYYY')
      .toUpperCase();
  }

  briefingTime(timestamp) {
    const time = {
      utc: moment
        .unix(timestamp)
        .utc()
        .format('HH:mm[Z]')
        .toUpperCase(),
      local: moment
        .unix(timestamp)
        .format('HH:mm')
        .toUpperCase(),
    };

    return time;
  }

  render() {
    const { events } = this.props;
    const { event } = events;

    let eventContent;

    if (!event) {
      eventContent = (
        <div style={{ minWidth: '100%', textAlign: 'center' }}>
          <Spin />
        </div>
      );
    } else {
      const eventDate = this.eventDate(event.ev_ctime);
      const briefingTime = this.briefingTime(event.ev_ctime);

      eventContent = (
        <Card title={`${event.ev_title}`}>
          <Row>
            <Col className='gutter-row' span={24} md={24}>
              <Tabs onChange={this.handleTabChange} type='card'>
                <TabPane tab='Overview' key='1'>
                  <table className='event-overview-table'>
                    <tbody>
                      <tr>
                        <td>Event Date:</td>
                        <td>{eventDate}</td>
                      </tr>
                      <tr>
                        <td>Briefing:</td>
                        <td>{`${briefingTime.utc} (${briefingTime.local} Local)`}</td>
                      </tr>
                      <tr>
                        <td>Event Host:</td>
                        <td>SomeGuy</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <h3 style={{ marginTop: '1em' }}>Event Description</h3>
                  <div>{event.ev_descr}</div>
                  <h3 style={{ marginTop: '1em' }}>Mission Summary</h3>
                  <div>{event.msn_summary}</div>
                </TabPane>
                <TabPane tab='Mission Briefing' key='2'>
                  <h3 style={{ marginTop: '1em' }}>Mission Briefing</h3>
                  <div>{event.msn_fullbrief}</div>
                </TabPane>
                <TabPane tab='Tasking' key='3'>
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab='Download PDF' key='4'>
                  <React.Suspense fallback={<p>Loading...</p>}>
                    <MDCDemo />
                  </React.Suspense>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Card>
      );
    }

    return eventContent;
  }
}

Event.propTypes = {
  fetchEvent: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(
  mapStateToProps,
  {
    fetchEvent: getEvent,
  },
)(Event);
