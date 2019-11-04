import { shallow } from 'enzyme';
import React from 'react';
import Switch from './Switch';

describe('<Switch />', () => {
  const rendered = shallow(<Switch />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
