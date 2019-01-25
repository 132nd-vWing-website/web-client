import React, { Component } from 'react';
import { Table, Button, Popover } from 'antd';
import ReactDragListView from 'react-drag-listview';
import PropTypes from 'prop-types';

/**
 * PageList
 * Takes an array of content, and returns a list array to the parent as the user minipulates the
 * list using the supplied onUpdate() function
 * @param {array} content - Array of available content (as PDF definitions) that can be added to the list
 * @param {func} onUpdate - Callback for returning the manipulated list to parent
 */

export default class PageList extends Component {
  state = {
    visible: false,
    pages: [],
  };

  columns = [
    {
      title: 'Name',
      dataIndex: 'label',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button.Group>
          <Button className='drag-handle' type='default' size='small'>
            Drag Me
          </Button>
          <Button
            type='danger'
            icon='close'
            size='small'
            onClick={() => this.removePage(record.key)}
          />
        </Button.Group>
      ),
    },
  ];

  componentDidUpdate(prevProps, prevState) {
    const { pages } = this.state;
    const { onUpdate } = this.props;

    if (pages !== prevState.pages) {
      onUpdate(pages);
    }
  }

  closePopover = () => {
    this.setState({ visible: false });
  };

  handlePopoverChange = (visible) => {
    this.setState({ visible });
  };

  addPage = (e) => {
    const { pages } = this.state;
    const { content } = this.props;
    const pageData = content.filter((page) => page.key === e.target.name);

    const newPage = {
      key: Date.now(),
      label: pageData[0].title + pages.length,
      pageKey: pageData[0].key,
      createPage: pageData[0].createPage,
    };

    this.closePopover();

    this.setState((prevState) => ({
      pages: [...prevState.pages, newPage],
    }));
  };

  removePage = (key) => {
    this.setState((prevState) => ({
      pages: prevState.pages.filter((page) => page.key !== key),
    }));
  };

  render() {
    // Draggable Setup
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        /* eslint prefer-destructuring: 0 */
        const pages = that.state.pages;
        const item = pages.splice(fromIndex, 1)[0];
        pages.splice(toIndex, 0, item);
        that.setState({ pages });
      },
      handleSelector: '.drag-handle', // Supports CSS Selectors :)
    };

    const { pages, visible } = this.state;
    const { content } = this.props;

    const options = content.map((type) => (
      <Button
        key={type.key}
        size='small'
        type='default'
        name={type.key}
        onClick={this.addPage}
        block
        style={{ marginBottom: '0.1em' }}>
        {type.title}
      </Button>
    ));

    const popoverContent = (
      <React.Fragment>
        {options}
        <Button type='primary' onClick={this.closePopover} size='small' block>
          Cancel
        </Button>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <ReactDragListView {...dragProps}>
          <Table columns={this.columns} pagination={false} dataSource={pages} size='small' />
        </ReactDragListView>
        <Button.Group style={{ float: 'right', marginTop: '1em' }}>
          <Popover
            content={popoverContent}
            title='Add New'
            trigger='click'
            visible={visible}
            onVisibleChange={this.handlePopoverChange}>
            <Button type='default'>+ Add</Button>
          </Popover>
        </Button.Group>
      </React.Fragment>
    );
  }
}

PageList.propTypes = {
  content: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
