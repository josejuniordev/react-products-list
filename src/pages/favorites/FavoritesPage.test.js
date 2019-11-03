import { render } from 'enzyme';
import React from 'react';
import {FavoritesPage} from './FavoritesPage';

describe('<ProductPage />', () => {
  const rendered = render(<FavoritesPage products={[]}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
