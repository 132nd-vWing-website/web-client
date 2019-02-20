import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import Skeleton from 'antd/lib/skeleton';
import 'antd/lib/skeleton/style/css';
import React from 'react';

export default function SkeletonLoader(props) {
  return (
    <Card>
      <Row>
        <Col className='gutter-row' span={24} md={24}>
          <Skeleton {...props} />
          <Skeleton {...props} />
          <Skeleton {...props} />
          <Skeleton {...props} />
          <Skeleton {...props} />
        </Col>
      </Row>
    </Card>
  );
}
