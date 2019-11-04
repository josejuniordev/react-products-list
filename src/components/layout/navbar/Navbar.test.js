import { shallow } from 'enzyme';
import React from 'react';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  const rendered = shallow(<Navbar />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
