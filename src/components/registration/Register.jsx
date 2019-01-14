import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

/** UI Components */
import { Card, Row, Col, Steps, Button, message } from 'antd';

/** Components */
import RegisterStep from './RegisterStep';
import LoginStep from './LoginStep';
import ProfileStep from './ProfileStep';

const { Step } = Steps;

/**
 * Register Component
 */
class Register extends Component {
  state = {
    current: 0,
    errors: {},
  };

  onNext = () => {
    const { current } = this.state;

    /** Should wait with incrementing until profile is ACTUALLY created */
    this.setState({ current: current + 1 });
  };

  onPrev = () => {
    /* Most likely need to have own functions pr. step and then trigger them from here based on state.current */
    const { current } = this.state;
    this.setState({ current: current - 1 });
  };

  render() {
    const { current, errors } = this.state;

    const steps = [
      {
        title: 'Register',
        content: <RegisterStep stepKey={0} currentStep={current} onNext={this.onNext} />,
      },
      {
        title: 'Log In',
        content: <LoginStep stepKey={1} currentStep={current} onNext={this.onNext} />,
      },
      {
        title: 'Create Profile',
        content: <ProfileStep stepKey={2} currentStep={current} onPrev={this.onPrev} />,
      },
    ];

    const contentStyle = {
      margin: '1em 0',
    };

    let disableNext = false;
    if (Object.keys(errors).length > 0) disableNext = true;

    return (
      <Card title='Profile'>
        <Row>
          <Col className='gutter-row' span={24} md={24}>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div style={contentStyle}>{steps[current].content}</div>
            {/* <div className='steps-action'>
              {current < steps.length - 1 && (
                <Button type='primary' disabled={disableNext} onClick={() => this.onNext()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type='primary'
                  disabled={disableNext}
                  onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.onPrev()}>
                  Previous
                </Button>
              )}
            </div> */}
          </Col>
        </Row>
      </Card>
    );
  }
}

// Register.propTypes = {
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(
//   mapStateToProps,
//   {},
// )(Register);

export default Register;
