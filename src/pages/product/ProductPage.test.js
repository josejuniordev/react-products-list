import { shallow } from 'enzyme';
import React from 'react';
import { ProductPage } from './ProductPage';
import { INITIAL_STATE } from '../../ducks/products';

describe('<ProductPage />', () => {
  const rendered = shallow(<ProductPage products={INITIAL_STATE} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
