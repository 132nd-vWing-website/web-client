import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* UI Components */
import { Row, Col, Card, Button, Form, Input, Icon, Checkbox, Alert } from 'antd';

/* Redux Actions */
import { loginUser } from '../../actions/authActions';

/**
 * Login (Main) Component
 */
class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      // Send the user somewhere else if he is allready logged in (Dashboard maybe?)
      history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    const { auth, history, errors } = this.props;
    if (auth.isAuthenticated) {
      // Send the user somewhere else after successful login
      history.push('/');
    }

    if (errors !== prevProps.errors) {
      this.setState({ errors });
    }
    return null;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginFunc } = this.props;

    const userData = { email, password };
    loginFunc(userData);
  };

  render() {
    const { errors, email, password } = this.state;

    return (
      <WrappedLoginForm
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
        errors={errors}
        email={email}
        password={password}
      />
    );
  }
}

Login.propTypes = {
  loginFunc: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginFunc: loginUser },
)(Login);

/**
 * LoginForm Component
 * @param {object} props
 */

const LoginForm = (props) => {
  const { email, password, errors, form, onChange, handleSubmit } = props;
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
    <Card title='Login'>
      <Row>
        <Col className='gutter-row' span={24} md={12}>
          <Form onSubmit={handleSubmit}>
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
              <Link to='/login' style={{ float: 'right' }}>
                Forgot password
              </Link>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                style={{ width: '100%' }}>
                Log in
              </Button>
              <Link to='/register'>
                <small>Don&apos;t have an account yet? Click here to register!</small>
              </Link>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>{alerts}</Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

/**
 * WrappedLoginForm - For enabling AntD Form decorators on LoginForm
 */
const WrappedLoginForm = Form.create({ name: 'loginForm' })(LoginForm);
