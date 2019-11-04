import { shallow } from 'enzyme';
import React from 'react';
import LayoutContainer from './LayoutContainer';

describe('<LayoutContainer />', () => {
  const rendered = shallow(<LayoutContainer />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
