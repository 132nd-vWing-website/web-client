import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

/**
 * LandingCard Component
 * @param {string} title
 * @param {string} body
 * @param {string} avatarUrl
 * @param {string} cover
 */
export default class LandingCard extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const { title, body, avatarUrl, cover } = this.props;

    const coverComponent = (
      <div
        style={{
          minWidth: '100%',
          maxHeight: '200px',
          minHeight: '200px',
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
}

LandingCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
