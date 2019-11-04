import { shallow } from 'enzyme';
import React from 'react';
import ImageDisplay from './ImageDisplay';
import { productsMock } from '../../../mock/products-mock';
import Product from '../../../classes/Product';

describe('<ImageDisplay />', () => {
  const rendered = shallow(<ImageDisplay product={new Product(productsMock[0])} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
