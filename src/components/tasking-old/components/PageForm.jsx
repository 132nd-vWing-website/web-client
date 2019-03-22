import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PageForm extends Component {
  state = {
    missionData: null,
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { missionData } = props;

  //   if (missionData !== state.missionData) {
  //     return { missionData };
  //   }
  //   return null;
  // }

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData });
  }

  componentDidUpdate(prevProps, prevState) {
    const { missionData } = this.state;
    const { onUpdate } = this.props;
    if (missionData !== prevState.missionData) {
      console.log('PageForm: I should update my parent now!');
      onUpdate(missionData);
    }
  }

  handleChange = (e) => {
    // const { onUpdate } = this.props;
    const change = { [e.target.name]: e.target.value };

    // onUpdate(e);

    console.log('handleChange():', change);

    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, change),
    }));
  };

  render() {
    const { missionData } = this.props;

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
  onUpdate: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};
