import React, { Component } from 'react';
import PropType from 'prop-types';

import LandingCard from './LandingCard';

/** These should be loaded via the API in the future! Used to display a random image for each slide */
import avatar from '../../img/132nd-logo-web-100.png';

const slider1 = 'https://i.imgur.com/jCC4dEe.jpg';
const slider2 = 'https://i.imgur.com/jCC4dEe.jpg';
const slider3 = 'https://i.imgur.com/jCC4dEe.jpg';
const slider4 = 'https://i.imgur.com/jCC4dEe.jpg';
const slider5 = 'https://i.imgur.com/jCC4dEe.jpg';

const generateKey = () => new Date().getUTCMilliseconds() + Math.random();

const newsItems = [
  {
    key: generateKey(),
    avatarUrl: avatar,
    cover: slider1,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: avatar,

    cover: slider2,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: avatar,
    cover: slider3,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: avatar,
    cover: slider4,
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: generateKey(),
    avatarUrl: avatar,
    cover: slider5,
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
export default class Landing extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    const { news } = this.props;
    this.updateNews(news);
  }

  updateNews = (news) => {
    this.setState({ news });
  };

  render() {
    const { news } = this.state;
    const newsCards = news.map((item) => (
      <LandingCard
        key={item.key}
        title={item.title}
        body={item.body}
        avatarUrl={item.avatarUrl}
        cover={item.cover}
      />
    ));
    return newsCards;
  }
}

Landing.propTypes = {
  news: PropType.array, // isRequired
};

Landing.defaultProps = {
  news: newsItems,
};
