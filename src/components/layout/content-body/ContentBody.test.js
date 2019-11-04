import { shallow } from 'enzyme';
import React from 'react';
import ContentBody from './ContentBody';

describe('<ContentBody />', () => {
  const rendered = shallow(<ContentBody />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
