import { shallow } from 'enzyme';
import React from 'react';
import { HomePage } from './HomePage';
import { INITIAL_STATE } from '../../ducks/products';

describe('<ProductPage />', () => {
  const rendered = shallow(<HomePage products={INITIAL_STATE} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
