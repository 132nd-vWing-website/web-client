import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

// export const CollapsibleContainer = styled.div`
//   &:first-child {
//     border-top-left-radius: 0.5em;
//     border-top-right-radius: 0.5em;
//   }

//   &:last-child {
//     color: hotpink;
//   }
// `;

const CollapsibleToggler = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  line-height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.20);

  &:hover {
    background-color: rgba(0, 0, 0, 0.10);
  }
`;

const CollapsibleContent = styled.div`
  display: ${(attr) => (attr.visible ? 'block' : 'none')};
  border: 1px solid rgba(0, 0, 0, 0.20);
  background-color: #fff;
  padding: 0 18px;
  padding-top: 2em;
  overflow: hidden;
  max-height: ${(attr) => (attr.visible ? '100%' : '0')};
  transition: all 0.2s ease-out;
`;

const CollapsibleIcon = styled.i`
  font-size: 1.2em;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  top: 50%;
  margin-top: 2px;
`;

const CollapsibleTitle = styled.span`
  margin-left: 2em;
  font-size: 1.2em;
  text-transform: uppercase;
`;

const CollapsibleContainer = styled.div`
  & > :first-child {
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  & > :last-child {
    border-bottom-left-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
  }
`;

export default function Collapsible({ children, title }) {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <CollapsibleToggler visible={visible} onClick={() => setVisible(!visible)}>
        <CollapsibleIcon>{visible ? <FiChevronDown /> : <FiChevronRight />}</CollapsibleIcon>
        <CollapsibleTitle>{title}</CollapsibleTitle>
      </CollapsibleToggler>
      {visible ? <CollapsibleContent visible={visible}>{children}</CollapsibleContent> : null}
    </React.Fragment>
  );
}

Collapsible.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};

Collapsible.defaultProps = {
  children: {},
  title: 'Click to open',
};

export function CollapsibleGroup({ children }) {
  return <CollapsibleContainer>{children}</CollapsibleContainer>;
}

CollapsibleGroup.propTypes = {
  children: PropTypes.object,
};

CollapsibleGroup.defaultProps = {
  children: {},
};
