import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** Base Button Component */
const BaseButton = styled.button`
  outline: none;
  cursor: pointer;

  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;

  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;

  :active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }

  :hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }

  :not([disabled]):active {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  :not([disabled]):hover {
    text-decoration: none;
  }

  :disabled,
  [disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;

    cursor: unset;
  }
`;

/** Primary Button Component */
const PrimaryButton = styled(BaseButton)`
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
`;

/** Button Component (exported) */
export default function Button({ children, onClick, type, disabled }) {
  switch (type) {
    case 'primary':
      return (
        <PrimaryButton disabled={disabled} onClick={onClick}>
          {children}
        </PrimaryButton>
      );
    default:
      return (
        <BaseButton disabled={disabled} onClick={onClick}>
          {children}
        </BaseButton>
      );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: 'button',
  type: null,
  disabled: false,
};
