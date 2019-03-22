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
