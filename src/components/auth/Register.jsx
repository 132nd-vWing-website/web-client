import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* UI Components */
import { Row, Col, Card, Button, Form, Input, Icon } from 'antd';

// Redux Actions
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dasboard');
    }
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push('/dasboard');
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    const { regUser, history } = this.props;

    const newUser = { name, email, password, password2 };
    regUser(newUser, history);
  };

  render() {
    const { errors, name, email, password, password2 } = this.state;

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

    return (
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Item
                {...formItemLayout}
                label='Account Name'
                validateStatus={errors.name ? 'error' : 'success'}
                help={errors.name}>
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Account Name'
                  name='name'
                  value={name}
                  onChange={this.onChange}
                />
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='E-mail'
                validateStatus={errors.email ? 'error' : 'success'}
                help={errors.email}>
                <Input
                  prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Provide a valid email address'
                  name='email'
                  value={email}
                  onChange={this.onChange}
                  autoComplete='username'
                />
                <small>Your email address will also be your account username</small>
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='Password'
                validateStatus={errors.password ? 'error' : 'success'}
                help={errors.password}>
                <Input
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={this.onChange}
                  autoComplete='new-password'
                />
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label='Confirm Password'
                validateStatus={errors.password2 ? 'error' : 'success'}
                help={errors.password2}>
                <Input
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  value={password2}
                  onChange={this.onChange}
                  autoComplete='new-password'
                />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
                  Register Account
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}

Register.propTypes = {
  regUser: PropTypes.func.isRequired,
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
  { regUser: registerUser },
)(withRouter(Register));
