import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  const rendered = shallow(<SearchBar />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
