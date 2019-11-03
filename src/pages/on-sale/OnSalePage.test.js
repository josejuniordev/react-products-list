import { shallow } from 'enzyme';
import React from 'react';
import {OnSalePage} from './OnSalePage';
import { INITIAL_STATE } from '../../ducks/products';

describe('<ProductPage />', () => {
  const rendered = shallow(<OnSalePage products={INITIAL_STATE}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
