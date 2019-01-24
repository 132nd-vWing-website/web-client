import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'antd';

export default class PageForm extends Component {
  state = {
    missionData: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { missionData } = props;

    if (missionData !== state.missionData) {
      return { missionData };
    }
    return null;
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    const { missionData } = this.state;
    onChange(e);

    missionData[e.target.name] = e.target.value;
    this.setState({ missionData });
  };

  render() {
    const { missionData } = this.state;
    const { form } = this.props;
    if (!missionData) return <div>Loading...</div>;

    const formItems = form.map((item) => {
      switch (item.type) {
        case 'input':
          return (
            <Form.Item key={item.name}>
              <Input
                name={item.name}
                addonBefore={item.label}
                value={missionData[item.name]}
                onChange={this.handleChange}
              />
            </Form.Item>
          );
        default:
          return null;
      }
    });
    return <Form style={{ margin: '0 1em' }}>{formItems}</Form>;
  }
}

PageForm.propTypes = {
  form: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};
