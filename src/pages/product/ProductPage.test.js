import { shallow } from 'enzyme';
import React from 'react';
import { ProductPage } from './ProductPage';

describe('<ProductPage />', () => {
  const rendered = shallow(<ProductPage products={[]} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
