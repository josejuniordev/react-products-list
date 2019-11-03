import { shallow, render } from 'enzyme';
import React from 'react';
import {ProductsList} from './ProductsList';
import { productsMock } from '../../mock/products-mock';
import ProductCard from './product-card/ProductCard';
import Product from '../../classes/Product';

describe('<ProductsList />', () => {
  const products = productsMock.map(product => new Product(product));
  const renderedWrapper = shallow(<ProductsList products={products} />);

  it('should render correctly', () => {
    expect(renderedWrapper).toMatchSnapshot();
  });

  it('should render the correctly number of cards to number of products', () => {
    expect(renderedWrapper.find(ProductCard).length).toBe(products.length);
  })
});
