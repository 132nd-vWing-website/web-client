import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import React from 'react';

export default function Spinner() {
  return (
    <div className='loader-spinner'>
      <Icon type='loading' />
    </div>
  );
}
