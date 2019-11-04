import { shallow } from 'enzyme';
import React from 'react';
import ProductInformation from './ProductInformation';
import { productsMock } from '../../mock/products-mock';
import Product from '../../classes/Product';

describe('<ProductInformation />', () => {
  const rendered = shallow(<ProductInformation product={new Product(productsMock[0])} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
