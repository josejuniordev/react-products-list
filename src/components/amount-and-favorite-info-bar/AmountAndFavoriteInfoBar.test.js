import { shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { TestableAmountAndFavoriteInfoBar } from './AmountAndFavoriteInfoBar';

describe('<AmountAndFavoriteInfoBar />', () => {
  const amountValue = 10;
  let rendered;

  act(() => {
    rendered = shallow(<TestableAmountAndFavoriteInfoBar amount={amountValue} />);
  });

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });

  it('should display amount information', () => {
    const amount = rendered.find('strong');
    expect(amount.length).toEqual(1);
  });
});
