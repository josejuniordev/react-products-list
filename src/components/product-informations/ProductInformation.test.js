import { shallow } from 'enzyme';
import React from 'react';
import ProductInformation from './ProductInformation';
import { productsMock } from '../../mock/products-mock';

describe('<ProductInformation />', () => {
  const rendered = shallow(<ProductInformation product={productsMock[0]} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
