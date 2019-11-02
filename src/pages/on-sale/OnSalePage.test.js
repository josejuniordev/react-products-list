import { render } from 'enzyme';
import React from 'react';
import {OnSalePage} from './OnSalePage';

describe('<OnSalePage />', () => {
  const rendered = render(<OnSalePage products={[]}/>);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
