import { shallow } from 'enzyme';
import React from 'react';
import {FavoritesPage} from './FavoritesPage';
import { INITIAL_STATE } from '../../ducks/products';

describe('<FavoritesPage />', () => {
  const rendered = shallow(<FavoritesPage products={INITIAL_STATE}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
