import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ProductsList } from './ProductsList';
import { productsMock } from '../../mock/products-mock';
import ProductCard from './product-card/ProductCard';
import Product from '../../classes/Product';
import store from '../../store';
import history from '../../history';

describe('<ProductsList />', () => {
  describe('with products', () => {
    const products = productsMock.map((product) => new Product(product));
    let testableMethods;

    const renderedWrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <ProductsList giveTestAccess={(values) => testableMethods = values} products={products} />
        </Router>
      </Provider>,
    );

    it('should render correctly', () => {
      expect(renderedWrapper).toMatchSnapshot();
    });

    it('should render the correctly number of cards to number of products', () => {
      const infiniteLoaderInitialNumber = 3;

      expect(renderedWrapper.find(ProductCard).length).toBe(infiniteLoaderInitialNumber);
    });
  });

  describe('without products', () => {
    const renderedWrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <ProductsList products={[]} />
        </Router>
      </Provider>,
    );

    it('should render correctly', () => {
      expect(renderedWrapper).toMatchSnapshot();
    });

    it('should render no products', () => {
      expect(renderedWrapper.find(ProductCard).length).toBe(0);
    });
  });
});
