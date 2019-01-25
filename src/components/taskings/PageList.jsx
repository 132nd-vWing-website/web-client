import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Divider, Button, Popover, Select } from 'antd';

import ReactDragListView from 'react-drag-listview';
import frontPage from '../../pdf/mdc/pages/frontPage';

// import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';

const { Option } = Select;

/**
 * PDFSetup
 * Takes an array of content, and returns a list array to the parent as the user minipulates the
 * list using the supplied onChange() function
 * @param {array} content - Array of available content (as PDF definitions) that can be added to the list
 * @param {func} onChange - Callback for returning the manipulated list to parent
 */

export default class PageList extends Component {
  state = {
    visible: false,
    pages: [],
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { list } = props;

  //   if (list !== state.list) {
  //     // Generate a new data-object for the table
  //     const data = list.map((item, index) => ({
  //       key: index,
  //     }));

  //     return { data };
  //   }
  //   return null;
  // }

  // createPdf = () => {
  //   const { missionData } = this.props;
  //   const { panes } = this.state;

  //   /** Create content from panes */
  //   const content = [];
  //   panes.forEach((pane) => {
  //     if (pane.create) {
  //       content.push(pane.create(missionData));
  //     }
  //     return null;
  //   });

  //   /**  Generate and then open the pdf */
  //   const pdf = pdfBuilder.makePdf('494th-MDC', content);
  //   pdf.open();

  //   /** Update State */
  //   this.setState(missionData);
  // };

  columns = [
    {
      title: 'Name',
      dataIndex: 'label',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record, index) => (
        <Button.Group>
          <Button className='drag-handle' type='primary' size='small'>
            Drag Me
          </Button>
          <Button type='danger' icon='close' size='small' onClick={() => this.removePage(index)} />
        </Button.Group>
      ),
    },
  ];

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

    pages.push({
      key: pages.length,
      label: pageData[0].title + pages.length,
      pageKey: pageData[0].key,
      createPage: pageData[0].createPage,
    });

    this.closePopover();

    this.setState({ pages });
  };

  removePage = (index) => {
    const { pages } = this.state;
    pages.splice(index, 1);

    this.setState({ pages });
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
            title='Choose Page...'
            trigger='click'
            visible={visible}
            onVisibleChange={this.handlePopoverChange}>
            <Button type='default'>+ Add Page</Button>
          </Popover>
          <Button type='primary' onClick={this.createPdf} style={{ marginLeft: '0.5em' }}>
            Print MDC
          </Button>
        </Button.Group>
      </React.Fragment>
    );
  }
}

PageList.propTypes = {
  content: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
