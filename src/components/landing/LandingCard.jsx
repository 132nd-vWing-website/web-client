import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style/css';
import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const { Meta } = Card;

/**
 * LandingCard Component
 * @param {string} title
 * @param {string} body
 * @param {string} avatarUrl
 * @param {string} cover
 */
export default function LandingCard(props) {
  const { title, body, avatarUrl, cover } = props;

  const [isLoading, setIsLoading] = useState(false);

  const coverComponent = (
    <div
      style={{
        minWidth: '100%',
        maxHeight: '200px',
        minHeight: '200px',
        backgroundColor: '#CCC',
        background: `url(${cover}) center center no-repeat`,
        backgroundSize: 'cover',
      }}
    />
  );

  const avatarComponent = <Avatar src={avatarUrl} />;
  const actionsComponent = [
    <Icon type='setting' />,
    <Icon type='edit' />,
    <Icon type='ellipsis' />,
  ];

  return (
    <Card
      style={{ width: '100%', margin: '0 0 1em 0' }}
      cover={coverComponent}
      actions={actionsComponent}
      loading={isLoading}>
      <Meta avatar={avatarComponent} title={title} description={body} />
    </Card>
  );
}

LandingCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
