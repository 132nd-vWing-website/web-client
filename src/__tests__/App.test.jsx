import React from 'react';
import ReactDOM from 'react-dom';

// import renderer from 'react-test-renderer';

// import ReactTestUtils from 'react-dom/test-utils';
// import { shallow } from 'enzyme';

/**
 * Jest:   https://jestjs.io/docs/en/tutorial-react.html
 * Enzyme: https://airbnb.io/enzyme/docs/installation/react-16.html
 * React:  https://reactjs.org/docs/test-utils.html
 */

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('does not fail snapshot testing', () => {
  //   const component = renderer.create(<App />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
