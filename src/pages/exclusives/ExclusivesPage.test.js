import { shallow } from 'enzyme';
import React from 'react';
import {ExclusivesPage} from './ExclusivesPage';
import { INITIAL_STATE } from '../../ducks/products';

describe('<ProductPage />', () => {
  const rendered = shallow(<ExclusivesPage products={INITIAL_STATE}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
