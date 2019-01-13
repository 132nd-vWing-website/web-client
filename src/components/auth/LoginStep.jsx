import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* UI Components */
import { Row, Col, Card, Button, Form, Input, Icon, Checkbox, Alert } from 'antd';

/* Redux Actions */
import { loginUser } from '../../actions/authActions';

/**
 * LoginStep (Main) Component
 */
class LoginStep extends Component {
  state = {
    email: '',
    password: '',
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
      // Send the user somewhere else after successful login
      onNext();
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { loginFunc } = this.props;

    const userData = { email, password };
    loginFunc(userData);
  };

  render() {
    const { errors, currentStep, email, password } = this.state;
    const { stepKey } = this.props;

    let allowNext = false;
    if (currentStep < stepKey) allowNext = true;

    return (
      <WrappedLoginForm
        errors={errors}
        email={email}
        password={password}
        onSubmit={this.handleSubmit}
        onChange={this.onChange}
        currentStep={currentStep}
        allowNext={allowNext}
      />
    );
  }
}

LoginStep.propTypes = {
  stepKey: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  loginFunc: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginFunc: loginUser },
)(LoginStep);

/**
 * LoginForm Component
 */
const LoginForm = (props) => {
  const { email, password, errors, form, onChange, onSubmit, allowNext } = props;
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

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 12,
        offset: 5,
      },
    },
  };

  const alerts = [];
  Object.keys(errors).forEach((err) => {
    alerts.push(
      <Alert
        key={err}
        description={errors[err]}
        type='error'
        showIcon
        style={{ margin: '1em 0' }}
      />,
    );
  });

  return (
    <React.Fragment>
      <Card title='Login'>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            <p>Let us test that your new account works by logging in</p>
          </Col>
        </Row>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            <Form onSubmit={onSubmit}>
              <Form.Item {...formItemLayout} label='Account Name'>
                {getFieldDecorator('email', {
                  setFieldsValue: email,
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input
                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='text'
                    placeholder='Account Name'
                    name='email'
                    onChange={onChange}
                    autoComplete='username'
                  />,
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label='Password'>
                {getFieldDecorator('password', {
                  setFieldsValue: password,
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={onChange}
                    autoComplete='current-password'
                  />,
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>{alerts}</Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
      <Button
        type='primary'
        disabled={allowNext}
        onClick={() => onSubmit()}
        style={{ margin: '1em 0' }}>
        Next
      </Button>
    </React.Fragment>
  );
};

/**
 * WrappedLoginForm - For enabling AntD Form decorators on LoginForm
 */
const WrappedLoginForm = Form.create({ name: 'loginForm' })(LoginForm);
