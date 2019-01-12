import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* UI Components */
import { Row, Col, Card, Button, Form, Input, Icon } from 'antd';

/* Redux Actions */
import { loginUser } from '../../actions/authActions';

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
    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 5 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 12 },
    //   },
    // };
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

  console.log(props);

  return (
    <Card title='Login'>
      <Row>
        <Col className='gutter-row' span={24} md={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Item {...formItemLayout} label='Account Name'>
              <Input
                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='Account Name'
                name='name'
              />
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={onChange}
                />,
              )}
            </Form.Item>
            <Link className='text-secondary' to='/register'>
              <small>Don&apos;t have an account yet? Click here to register!</small>
            </Link>
          </Form>
        </Col>
      </Row>
    </Card>
  );

  // return (
  //   <Card title='Login'>
  //     <Row>
  //       <Col className='gutter-row' span={24} md={12}>
  //         <Form handleSubmit={this.handleSubmit}>
  //           <Form.Item
  //             {...formItemLayout}
  //             label='Account Name'
  //             validateStatus={errors.name ? 'error' : 'success'}
  //             help={errors.name}>
  //             <Input
  //               prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
  //               placeholder='Account Name'
  //               name='name'
  //               value={name}
  //               onChange={this.onChange}
  //             />
  //           </Form.Item>
  //           <small>
  //             <Link className='text-secondary' to='/register'>
  //               Don't have an account yet? Click here to register!
  //             </Link>
  //           </small>
  //         </Form>
  //       </Col>
  //     </Row>
  //   </Card>
  // );
};

/**
 * WrappedLoginForm - For enabling AntD Form decorators on LoginForm
 */
const WrappedLoginForm = Form.create({ name: 'loginForm' })(LoginForm);
