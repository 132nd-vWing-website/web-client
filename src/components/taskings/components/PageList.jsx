import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Popover from 'antd/lib/popover';
import 'antd/lib/popover/style/css';
import Table from 'antd/lib/table';
import 'antd/lib/table/style/css';
import React, { useContext, useEffect, useState } from 'react';
import mdc from '../../../pdf/mdc';
import { PDFPagesContext } from '../../pdf/PDFPagesProvider';

/**
 * Shows all pages added to the document, and also supplies add/delete/arrange functions to
 * pages
 */
export default function PageList() {
  const { pages, setPages } = useContext(PDFPagesContext);

  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState([]);
  useEffect(() => {
    const templates = Object.keys(mdc.pages).map((page) => {
      const pageObj = mdc.pages[page];
      return {
        title: pageObj.title,
        key: page,
        createPage: pageObj.create,
        form: pageObj.form || null,
      };
    });
    setContent(templates);
  }, []);

  const closePopover = () => {
    setVisible(false);
  };

  const addPage = ({ target }) => {
    const template = content.filter((page) => page.key === target.name);

    const newPage = {
      key: Date.now(),
      label: `${template[0].title}`,
      pageKey: template[0].key,
      createPage: template[0].createPage,
    };

    closePopover();
    setPages((prev) => [...prev, newPage]);
  };

  // Needs to be state...?
  const options = content.map((type) => (
    <Button
      key={type.key}
      size='small'
      type='default'
      name={type.key}
      onClick={addPage}
      block
      style={{ marginBottom: '0.1em' }}>
      {type.title}
    </Button>
  ));

  const removePage = (key) => {
    setPages((prev) => prev.filter((page) => page.key !== key));
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'label',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button.Group>
          <Button type='danger' icon='close' size='small' onClick={() => removePage(record.key)} />
        </Button.Group>
      ),
    },
  ];

  const popoverContent = (
    <React.Fragment>
      {options}
      <Button type='primary' onClick={closePopover} size='small' block>
        Cancel
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Table columns={columns} pagination={false} dataSource={pages} size='small' />
      <Button.Group style={{ float: 'right', marginTop: '1em' }}>
        <Popover
          content={popoverContent}
          title='Add New'
          trigger='click'
          visible={visible}
          onVisibleChange={setVisible}>
          <Button type='default'>+ Add</Button>
        </Popover>
      </Button.Group>
    </React.Fragment>
  );
}

// export default class PageList extends Component {
//   state = {
//     visible: false,
//     pages: [],
//   };

//   columns = [
//     {
//       title: 'Name',
//       dataIndex: 'label',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (text, record) => (
//         <Button.Group>
//           <Button className='drag-handle' type='default' size='small'>
//             Drag Me
//           </Button>
//           <Button
//             type='danger'
//             icon='close'
//             size='small'
//             onClick={() => this.removePage(record.key)}
//           />
//         </Button.Group>
//       ),
//     },
//   ];

//   componentDidUpdate(prevProps, prevState) {
//     const { pages } = this.state;
//     const { onUpdate } = this.props;

//     if (pages !== prevState.pages) {
//       onUpdate(pages);
//     }
//   }

//   closePopover = () => {
//     this.setState({ visible: false });
//   };

//   handlePopoverChange = (visible) => {
//     this.setState({ visible });
//   };

//   addPage = (e) => {
//     const { pages } = this.state;
//     const { content } = this.props;
//     const pageData = content.filter((page) => page.key === e.target.name);

//     const newPage = {
//       key: Date.now(),
//       label: pageData[0].title + pages.length,
//       pageKey: pageData[0].key,
//       createPage: pageData[0].createPage,
//     };

//     this.closePopover();

//     this.setState((prevState) => ({
//       pages: [...prevState.pages, newPage],
//     }));
//   };

//   removePage = (key) => {
//     this.setState((prevState) => ({
//       pages: prevState.pages.filter((page) => page.key !== key),
//     }));
//   };

//   render() {
//     // Draggable Setup
//     const that = this;
//     const dragProps = {
//       onDragEnd(fromIndex, toIndex) {
//         /* eslint prefer-destructuring: 0 */
//         const pages = that.state.pages;
//         const item = pages.splice(fromIndex, 1)[0];
//         pages.splice(toIndex, 0, item);
//         that.setState({ pages });
//       },
//       handleSelector: '.drag-handle', // Supports CSS Selectors :)
//     };

//     const { pages, visible } = this.state;
//     const { content } = this.props;

//     const options = content.map((type) => (
//       <Button
//         key={type.key}
//         size='small'
//         type='default'
//         name={type.key}
//         onClick={this.addPage}
//         block
//         style={{ marginBottom: '0.1em' }}>
//         {type.title}
//       </Button>
//     ));

//     const popoverContent = (
//       <React.Fragment>
//         {options}
//         <Button type='primary' onClick={this.closePopover} size='small' block>
//           Cancel
//         </Button>
//       </React.Fragment>
//     );

//     return (
//       <React.Fragment>
//         <ReactDragListView {...dragProps}>
//           <Table columns={this.columns} pagination={false} dataSource={pages} size='small' />
//         </ReactDragListView>
//         <Button.Group style={{ float: 'right', marginTop: '1em' }}>
//           <Popover
//             content={popoverContent}
//             title='Add New'
//             trigger='click'
//             visible={visible}
//             onVisibleChange={this.handlePopoverChange}>
//             <Button type='default'>+ Add</Button>
//           </Popover>
//         </Button.Group>
//       </React.Fragment>
//     );
//   }
// }

// PageList.propTypes = {
//   content: PropTypes.array.isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };
