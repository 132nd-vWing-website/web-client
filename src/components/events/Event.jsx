import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import moment from 'moment';

import { Card, Row, Col, Tabs, Spin } from 'antd';

import { getEvent } from '../../actions/eventActions';
import { getMission } from '../../actions/missionActions';

import './event.css';

const { TabPane } = Tabs;

class Event extends Component {
  componentDidMount() {
    const { fetchEvent, match } = this.props;
    fetchEvent(match.params.id);
    // fetchMission(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { fetchMission, events } = this.props;
    const { msn_id } = events.event || false;
    if (events !== prevProps.events) fetchMission(msn_id);
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
    const { events, missions } = this.props;
    const { event } = events;
    const { mission } = missions;

    let eventContent;

    if (!events || !mission) {
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
                  <div>{mission.msn_summary}</div>
                </TabPane>
                <TabPane tab='Briefing' key='2'>
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab='Flights' key='3'>
                  Content of Tab Pane 3
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
  fetchMission: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  missions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
  missions: state.missions,
});

export default connect(
  mapStateToProps,
  {
    fetchEvent: getEvent,
    fetchMission: getMission,
  },
)(Event);
