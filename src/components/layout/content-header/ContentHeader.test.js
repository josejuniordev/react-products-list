import { shallow } from 'enzyme';
import ContentHeader from './ContentHeader';
import React from 'react';

describe('<ContentHeader />', () => {
  const title = 'Testando meu componente';
  const description = 'Subtítulo do teste';

  const rendered = shallow(<ContentHeader title={title} description={description} />);

  it('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });

  describe('should render a title tag correctly', () => {
    const foundTitle = rendered.find('h1');

    it('should have a h1 html tag', () => {
      expect(foundTitle.length).toBe(1);
    });

    it('should have the right title text', () => {
      expect(foundTitle.text()).toBe(title);
    });
  })

  describe('should render header description tag correctly', () => {
    const foundHeaderDescription = rendered.find('p');

    it('should have a p html tag', () => {
      expect(foundHeaderDescription.length).toBe(1);
    });

    it('should have the right title text', () => {
      expect(foundHeaderDescription.text()).toBe(description);
    });
  })
});
