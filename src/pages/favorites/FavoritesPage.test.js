import { render } from 'enzyme';
import React from 'react';
import {FavoritesPage} from './FavoritesPage';

describe('<FavoritesPage />', () => {
  const rendered = render(<FavoritesPage products={[]}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
