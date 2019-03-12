import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from './colors';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  padding-left: 1em;
  border: 1px solid #dadada;
  border-radius: 0.5em;

  &:focus {
    border-color: ${colors.primary.highlight.border};
    color: ${colors.global.dark[30]};
  }
`;

const List = styled.ul`
  list-style: none;
  margin-top: 0.25em;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: none;

  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0.5em;

  width: 100%;
  overflow: auto;
  font-weight: normal;
  max-height: 14em;
  line-height: 2em;
  white-space: nowrap;

  & li {
    padding-left: 1em;
  }

  & li:hover,
  li.active {
    background: ${colors.primary.highlight.background};
    cursor: pointer;
  }
`;

class Autocomplete extends React.PureComponent {
  state = {
    // filter: '',
    filter: this.props.value,
    cursor: null,
  };

  listRef = React.createRef();

  handleSelect = (e) => {
    const { name, onChange } = this.props;
    const { value } = e.target.dataset;

    onChange({ name, value });
  };

  handleInput = (e) => {
    this.setState({ filter: e.target.value });
  };

  toggleVisibility = (setOn) => {
    if (setOn) {
      this.listRef.current.style.display = 'block';
    } else {
      setTimeout(() => {
        this.listRef.current.style.display = 'none';
      }, 100);
    }
  };

  setActiveOption = () => {
    const { name, onChange } = this.props;
    if (this.activeRef.current) {
      const { value } = this.activeRef.current.dataset;
      onChange({ name, value });
    }
  };

  handleKeyDown = (e) => {
    const { cursor, filter } = this.state;
    const { data } = this.props;

    const filteredResult = data.filter((el) =>
      el.label.toLowerCase().includes(filter.toLowerCase()),
    );

    // if the key pressed is Enter, then we want to select that option
    if (e.keyCode === 13) {
      this.setActiveOption();
    }

    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }));
    } else if (e.keyCode === 40 && cursor < filteredResult.length - 1) {
      if (cursor === null) {
        this.setState({ cursor: 0 });
      } else {
        this.setState((prevState) => ({
          cursor: prevState.cursor + 1,
        }));
      }
    }
  };

  render() {
    const { filter, cursor } = this.state;
    const { placeholder, data, value } = this.props;

    return (
      <Container>
        <Input
          value={filter || value}
          // value={filter}
          placeholder={placeholder}
          onChange={this.handleInput}
          onFocus={() => this.toggleVisibility(true)}
          onBlur={() => this.toggleVisibility(false)}
          onKeyDown={this.handleKeyDown}
          autoComplete='off'
        />
        <List
          ref={this.listRef}
          role='listbox'
          onMouseEnter={() => this.setState({ cursor: null })}>
          {data
            .filter((el) => el.label.toLowerCase().includes(filter.toLowerCase()))
            .map((item, index) => (
              <li
                role='option'
                key={item.key}
                data-value={item.value}
                aria-selected='false'
                onClick={this.handleSelect}
                onKeyDown={this.handleSelect}
                className={cursor === index ? 'active' : null}
                // ref={cursor === index ? this.activeRef : null}>
                ref={(el) => {
                  this.activeRef = el;
                }}>
                {item.label}
              </li>
            ))}
        </List>
      </Container>
    );
  }
}

Autocomplete.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Autocomplete.defaultProps = {
  value: undefined,
  placeholder: '',
};

export default Autocomplete;
