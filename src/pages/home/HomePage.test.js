import { render } from 'enzyme';
import React from 'react';
import {HomePage} from './HomePage';

describe('<OnSalePage />', () => {
  const rendered = render(<HomePage products={[]}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
