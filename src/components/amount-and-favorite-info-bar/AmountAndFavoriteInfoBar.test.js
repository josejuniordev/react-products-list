import { shallow } from 'enzyme';
import React from 'react';
import {AmountAndFavoriteInfoBar} from './AmountAndFavoriteInfoBar';
import { currencyFormat } from '../../helpers/utils';
import {act} from 'react-dom/test-utils';

describe('<AmountAndFavoriteInfoBar />', () => {
  const amountValue = 10;
  let rendered;

  act(() => {
    rendered = shallow(<AmountAndFavoriteInfoBar amount={amountValue} />);
  })

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });

  it('should display amount information', () => {
    const amount = rendered.find('strong');
    expect(amount.length).toEqual(1);
  });
});
