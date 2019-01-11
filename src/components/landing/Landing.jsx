import React, { Component } from 'react';
import PropType from 'prop-types';

import LandingCard from './LandingCard';

/** These should be loaded via the API in the future! Used to display a random image for each slide */
import slider1 from '../../img/sliders/slider1.png';
import slider2 from '../../img/sliders/slider2.png';
import slider3 from '../../img/sliders/slider3.png';
import slider4 from '../../img/sliders/slider4.png';
import slider5 from '../../img/sliders/slider5.png';

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
  {
    key: generateKey(),
    avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
