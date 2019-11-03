import { render } from 'enzyme';
import React from 'react';
import {ExclusivesPage} from './ExclusivesPage';

describe('<ProductPage />', () => {
  const rendered = render(<ExclusivesPage products={[]}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
