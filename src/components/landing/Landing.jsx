import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Icon, Avatar } from 'antd';

/** These should be loaded via the API in the future! Used to display a random image for each slide */
import slider1 from '../../img/sliders/slider1.png';
import slider2 from '../../img/sliders/slider2.png';
import slider3 from '../../img/sliders/slider3.png';
import slider4 from '../../img/sliders/slider4.png';
import slider5 from '../../img/sliders/slider5.png';

const { Meta } = Card;

const generateKey = () => new Date().getUTCMilliseconds() + Math.random();

const newsItems = [
  {
    key: generateKey(),
    avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    cover: slider1,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    cover: slider2,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    cover: slider3,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    cover: slider4,
    title: 'Card Title',
    body: 'This is the card body',
  },
];

/**
 * Landing Component
 * @param {string} title
 * @param {string} body
 * @param {string} avatarUrl
 * @param {string} cover
 */
const Landing = () => {
  const news = newsItems.map((item) => (
    <LandingCard
      key={item.key}
      title={item.title}
      body={item.body}
      avatarUrl={item.avatarUrl}
      cover={item.cover}
    />
  ));
  return news;
};

export default Landing;

class LandingCard extends Component {
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
