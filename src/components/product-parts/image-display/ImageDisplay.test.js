import { shallow } from 'enzyme';
import React from 'react';
import ImageDisplay from './ImageDisplay';
import { productsMock } from '../../../mock/products-mock';

describe('<ImageDisplay />', () => {
  const rendered = shallow(<ImageDisplay product={productsMock[0]} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
