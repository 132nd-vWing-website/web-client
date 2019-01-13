import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/** UI Components */
import { Card, Row, Col, Spin } from 'antd';

/** Redux Actions */
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';

/**
 * ProfileDashboard
 */
class ProfileDashboard extends Component {
  componentDidMount() {
    const { fetchCurrentProfile } = this.props;
    fetchCurrentProfile();
  }

  onDeleteClick = () => {
    const { removeAccount } = this.props;
    removeAccount();
  };

  render() {
    const { profile, loading } = this.props.profile; /* eslint react/destructuring-assignment:0 */
    const { auth } = this.props;
    const { user } = auth;

    // console.log('Object.keys(profile).length', Object.keys(profile).length);

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = (
        <Col className='gutter-row' span={24} md={24}>
          <div style={{ minWidth: '100%', textAlign: 'center' }}>
            <Spin />
          </div>
        </Col>
      );
    } else if (Object.keys(profile).length > 0) {
      /* Check if logged in user has profile data */
      dashboardContent = (
        <Col className='gutter-row' span={24} md={24}>
          <div style={{ minWidth: '100%', textAlign: 'center' }}>Show Profile Dash...</div>
        </Col>
      );
    } else {
      /* User is logged in, but has no profile */
      dashboardContent = (
        <Col className='gutter-row' span={24} md={24}>
          <h2>{`Welcome ${user.name}`}</h2>
          <p>You have not yet setup a pilot profile. </p>
          <Link to='/create-profile' className='btn btn-lg btn-info'>
            Create Profile
          </Link>
        </Col>
      );
    }

    return (
      <Card title='Profile'>
        <Row>{dashboardContent}</Row>
      </Card>
    );
  }
}

ProfileDashboard.propTypes = {
  fetchCurrentProfile: PropTypes.func.isRequired,
  removeAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {
    fetchCurrentProfile: getCurrentProfile,
    removeAccount: deleteAccount,
  },
)(ProfileDashboard);
