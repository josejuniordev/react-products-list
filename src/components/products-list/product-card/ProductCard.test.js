import { shallow } from 'enzyme';
import React from 'react';
import ProductCard from './ProductCard';
import { productsMock } from '../../../mock/products-mock';
import Product from '../../../classes/Product';

describe('<ProductCard />', () => {
  const rendered = shallow(<ProductCard product={new Product(productsMock[0])} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
