import { render } from 'enzyme';
import React from 'react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  const rendered = render(<HomePage/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
