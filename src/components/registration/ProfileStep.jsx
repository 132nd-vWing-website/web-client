import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* UI Components */
import { Row, Col, Card, Button, Form, Input, Icon } from 'antd';

/* Redux Actions */
import { getCurrentProfile, createProfile } from '../../actions/profileActions';

const { TextArea } = Input;

/**
 * ProfileStep (Main) Component
 */
class ProfileStep extends Component {
  state = {
    callsign: '',
    handle: '',
    status: 'Active',
    bio: '',
    errors: {},
  };

  componentDidMount() {
    const { auth, profile, onPrev, fetchCurrentProfile, history } = this.props;
    fetchCurrentProfile();

    if (!auth.isAuthenticated) {
      /** If the user is not logged in, then we send him back one step */
      onPrev();
    }
    if (profile.profile.handle) {
      /** If a profile allready exists, redirect the user to the dashboard */
      console.log('foo');
      history.push('/dashboard');
    }
  }

  componentDidUpdate(prevProps) {
    const { errors, currentStep, profile, history } = this.props;
    if (errors !== prevProps.errors) this.setState({ errors });
    if (currentStep !== prevProps.currentStep) this.setState({ currentStep });
    if (profile.profile.handle) {
      /** If a profile allready exists, redirect the user to the dashboard */
      console.log('bar');
      history.push('/dashboard');
    }
  }

  makeHandle = (callsign) => {
    const div = document.createElement('div');
    const text = document.createTextNode(callsign);
    div.appendChild(text);
    return div.innerHTML.toLowerCase().replace(/\s/g, '');
  };

  onChange = (e) => {
    const { value } = e.target;
    if (e.target.name === 'handle') {
      this.setState({
        [e.target.name]: this.makeHandle(value),
      });
    } else {
      this.setState({ [e.target.name]: value });
    }
  };

  handleSubmit = () => {
    const { makeProfile, history } = this.props;
    const { callsign, handle, status, bio } = this.state;
    const profileData = { callsign, handle, status, bio };
    makeProfile(profileData, history);
  };

  render() {
    const { errors, currentStep, callsign, handle, bio } = this.state;
    const { stepKey } = this.props;

    let allowNext = false;
    if (currentStep < stepKey) allowNext = true;

    return (
      <WrappedProfileForm
        errors={errors}
        callsign={callsign}
        handle={handle}
        bio={bio}
        onSubmit={this.handleSubmit}
        onChange={this.onChange}
        currentStep={currentStep}
        allowNext={allowNext}
      />
    );
  }
}

ProfileStep.propTypes = {
  stepKey: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  fetchCurrentProfile: PropTypes.func.isRequired,
  makeProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  {
    fetchCurrentProfile: getCurrentProfile,
    makeProfile: createProfile,
  },
)(withRouter(ProfileStep));

/**
 * ProfileForm Component
 */
const ProfileForm = (props) => {
  const { callsign, handle, errors, form, onChange, onSubmit, allowNext } = props;
  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  return (
    <React.Fragment>
      <Card title='Create Profile'>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            <p>
              The final step in registering is to set up your pilot profile. After completing this
              step, you will have a fully set up account and ready to be assigned to a squadron.
            </p>
            <p>
              First order of business is to choose a callsign. While you might already have
              nicknames from previous games, please ensure your callsign fulfills the following
              criteria:
            </p>
            <ul>
              <li>Is in good taste</li>
              <li>Is not Maverick, Iceman, Goose or otherwise cliché...</li>
              <li>Is not Assassin, Sniper, Hornet or other terms that could cause confusion</li>
              <li>Can actually be called over the radio</li>
            </ul>
            <p>
              If the above criteria are not fulfilled, you will be asked to change it (or a new one
              given..!)
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            <Form onSubmit={onSubmit}>
              <Form.Item
                {...formItemLayout}
                label='Callsign'
                validateStatus={errors.callsign ? 'error' : 'success'}
                help={errors.callsign}>
                {getFieldDecorator('callsign', {
                  setFieldsValue: callsign,
                  rules: [{ required: true, message: 'Please provide a callsign!' }],
                })(
                  <Input
                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text'
                    placeholder='Callsign'
                    name='callsign'
                    onChange={onChange}
                    autoComplete='callsign'
                  />,
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='Handle'
                validateStatus={errors.handle ? 'error' : 'success'}
                help={errors.handle}>
                {getFieldDecorator('handle', {
                  setFieldsValue: handle,
                  rules: [{ required: true, message: 'Please provide a handle!' }],
                })(
                  <Input
                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text'
                    placeholder='Profile handle'
                    name='handle'
                    onChange={onChange}
                    autoComplete='handle'
                  />,
                )}
                <small>
                  A unique handle for your profile, useful for linking to your profile directly
                </small>
              </Form.Item>
              <Form.Item {...formItemLayout} label='Bio'>
                <TextArea
                  rows={4}
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='text'
                  placeholder='Please write a few words about yourself'
                  name='bio'
                  onChange={onChange}
                  autoComplete='bio'
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
      <Button
        type='primary'
        disabled={allowNext}
        onClick={() => onSubmit()}
        style={{ margin: '1em 0' }}>
        Done
      </Button>
    </React.Fragment>
  );
};

/**
 * WrappedProfileForm - For enabling AntD Form decorators on LoginForm
 */
const WrappedProfileForm = Form.create({ name: 'profile-form' })(ProfileForm);
