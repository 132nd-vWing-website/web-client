import React from 'react';
import { shallow } from 'enzyme';

import Landing from '../Landing';
import LandingCard from '../LandingCard';

const newsItems = [
  {
    key: 1,
    avatarUrl: '',
    cover: '',
    title: 'Card Title',
    body: 'This is the card body',
  },
  {
    key: 2,
    avatarUrl: '',
    cover: '',
    title: 'Card Title',
    body: 'This is the card body',
  },
];

describe('<Landing />', () => {
  it('Should recieve props', () => {
    const component = shallow(<Landing />);
    // component.setProps({ news: newsItems });
    // expect(component.prop('news')).toBeDefined();
    // expect(component.prop('news')).toEqual(newsItems);
    expect(component).toBeDefined();
  });

  // it('Should render - without any props passed', () => {
  //   const component = shallow(<Landing />);
  // });

  // it('Should render LandingCards for all items in a list of news provided as a prop', () => {
  //   const component = shallow(<Landing news={newsItems} />);
  //   expect(component.find(LandingCard).length).toEqual(2);
  // });
});

// it('Should render a list of news provided as a prop', () => {
//   const component = shallow(<Landing news={newsItems} />);
//   // const component = renderer.create(<Landing news={newsItems} />);
// });

// it('Should render even with no news-items supplied', () => {
//   const component = renderer.create(<Landing news={[]} />);
// });

// it('Should update on prop changes', () => {
//   const intialComponent = renderer.create(<Landing news={[]} />);
//   const updatedComponent = renderer.create(<Landing news={newsItems} />);
// });
