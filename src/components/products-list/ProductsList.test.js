import { shallow, render } from 'enzyme';
import React from 'react';
import {ProductsList} from './ProductsList';

describe('<ProductsList />', () => {
  const renderedWrapper = render(<ProductsList />);

  it('should render correctly', () => {
    expect(renderedWrapper).toMatchSnapshot();
  });
});
