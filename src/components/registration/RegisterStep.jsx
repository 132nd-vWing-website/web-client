import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* UI Components */
import { Card, Row, Col, Form, Input, Button, Icon } from 'antd';

// Redux Actions
import { registerUser } from '../../actions/authActions';

class RegisterStep extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  componentDidMount() {
    const { auth, onNext } = this.props;
    if (auth.isAuthenticated) {
      // Send the user to the next page if he is allready logged in
      onNext();
    }
  }

  componentDidUpdate(prevProps) {
    const { errors, currentStep, auth, onNext } = this.props;
    if (errors !== prevProps.errors) this.setState({ errors });
    if (currentStep !== prevProps.currentStep) this.setState({ currentStep });
    if (auth.isAuthenticated) {
      // Send the user to the next page if he is allready logged in
      onNext();
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { name, email, password, password2 } = this.state;
    const { regUser, onNext } = this.props;

    const newUser = { name, email, password, password2 };

    const status = regUser(newUser);

    status.then(() => {
      onNext();
    });
  };

  render() {
    const { errors, currentStep, name, email, password, password2 } = this.state;
    const { stepKey } = this.props;

    let allowNext = false;
    if (currentStep < stepKey) allowNext = true;

    return (
      <WrappedRegisterForm
        errors={errors}
        name={name}
        email={email}
        password={password}
        password2={password2}
        onSubmit={this.handleSubmit}
        onChange={this.onChange}
        currentStep={currentStep}
        allowNext={allowNext}
      />
    );
  }
}

RegisterStep.propTypes = {
  stepKey: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  regUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { regUser: registerUser },
)(RegisterStep);

/**
 * RegisterForm Component
 */
const RegisterForm = (props) => {
  const { form, errors, name, email, password, password2, onSubmit, onChange, allowNext } = props;
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
      <Card title='Register Account'>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            <p>
              An account is needed in order to create a pilot profile and be able to apply for
              squadrons, events etc.
            </p>
            <p>Create your account by filling out the form below:</p>
          </Col>
        </Row>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            <Form onSubmit={onSubmit}>
              <Form.Item
                {...formItemLayout}
                label='Account Name'
                validateStatus={errors.name ? 'error' : 'success'}
                help={errors.name}>
                {getFieldDecorator('name', {
                  setFieldsValue: name,
                  rules: [{ required: true, message: 'Please provide an account name' }],
                })(
                  <Input
                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder='Account Name'
                    name='name'
                    onChange={onChange}
                    autoComplete='name'
                  />,
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='E-mail (Username)'
                validateStatus={errors.email ? 'error' : 'success'}
                help={errors.email}>
                {getFieldDecorator('email', {
                  setFieldsValue: email,
                  rules: [{ required: true, message: 'Please input your email' }],
                })(
                  <Input
                    prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder='Provide a valid email address'
                    name='email'
                    onChange={onChange}
                    autoComplete='username'
                  />,
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='Password'
                validateStatus={errors.password ? 'error' : 'success'}
                help={errors.password}>
                {getFieldDecorator('password', {
                  setFieldsValue: password,
                  rules: [{ required: true, message: 'Please provide a valid password' }],
                })(
                  <Input
                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={onChange}
                    autoComplete='new-password'
                  />,
                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='Confirm Password'
                validateStatus={errors.password2 ? 'error' : 'success'}
                help={errors.password2}>
                {getFieldDecorator('password2', {
                  setFieldsValue: password2,
                  rules: [{ required: true, message: 'Passwords do not match' }],
                })(
                  <Input
                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    onChange={onChange}
                    autoComplete='new-password'
                  />,
                )}
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
      <Button
        type='primary'
        disabled={allowNext}
        onClick={() => onSubmit()}
        style={{ margin: '1em 0', float: 'right' }}>
        Next
      </Button>
    </React.Fragment>
  );
};

/**
 * WrappedRegisterForm - For enabling AntD Form decorators on LoginForm
 */
const WrappedRegisterForm = Form.create({ name: 'register-form' })(RegisterForm);
