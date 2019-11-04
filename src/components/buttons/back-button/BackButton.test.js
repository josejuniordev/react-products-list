import { shallow } from 'enzyme';
import React from 'react';
import BackButton from './BackButton';

describe('<BackButton />', () => {
  const rendered = shallow(<BackButton />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
