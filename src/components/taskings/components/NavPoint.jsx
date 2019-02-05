import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class NavPoint extends Component {
  shouldComponentUpdate(nextProps) {
    const { props } = this;

    if (props !== nextProps) {
      return true;
    }

    return false;
  }

  handleChange = (e) => {
    const { id, name, tos, hdg, dist, gs, alt, action, onChange } = this.props;

    const change = { [e.target.name]: e.target.value };
    const newPoint = Object.assign({}, { id, name, tos, hdg, dist, gs, alt, action }, change);
    onChange(newPoint);
    // console.log(newPoint);
  };

  render() {
    const { id, name, tos, hdg, dist, gs, alt, action, onChange } = this.props;

    return (
      <Form.Item style={{ margin: 0 }}>
        <Input.Group compact>
          <Input
            name='name'
            value={name}
            style={{ width: '30%' }}
            addonBefore={`STPT #${id}`}
            onChange={this.handleChange}
          />
          <Input name='tos' value={tos} style={{ width: '10%' }} onChange={this.handleChange} />
          <Input name='hdg' value={hdg} style={{ width: '10%' }} onChange={this.handleChange} />
          <Input name='dist' value={dist} style={{ width: '10%' }} onChange={this.handleChange} />
          <Input name='gs' value={gs} style={{ width: '10%' }} onChange={this.handleChange} />
          <Input name='alt' value={alt} style={{ width: '10%' }} onChange={this.handleChange} />
          <Input
            name='action'
            value={action}
            style={{ width: '20%' }}
            onChange={this.handleChange}
          />
        </Input.Group>
      </Form.Item>
    );
  }
}

NavPoint.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tos: PropTypes.string.isRequired,
  hdg: PropTypes.string.isRequired,
  dist: PropTypes.string.isRequired,
  gs: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
