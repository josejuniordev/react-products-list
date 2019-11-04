import { shallow, render } from 'enzyme';
import React from 'react';
import ContentHeader from './ContentHeader';

describe('<ContentHeader />', () => {
  const title = 'Empresa XPTO';
  const titleComplement = 'Lista de produtos';
  const description = 'Descrição do header';
  const renderedWrapper = render(
    <ContentHeader title={title} titleComplement={titleComplement} description={description} />,
  );

  it('should render correctly', () => {
    expect(renderedWrapper).toMatchSnapshot();
  });

  const wrapper = shallow(
    <ContentHeader title={title} titleComplement={titleComplement} description={description} />,
  );

  describe('should render a title tag correctly', () => {
    describe('with the complementary text', () => {
      const foundTitle = wrapper.find('h1');

      it('should have a h1 html tag', () => {
        expect(foundTitle.length).toEqual(1);
      });

      it('should have the correct text merge in the title', () => {
        expect(foundTitle.text()).toEqual(`${title} - ${titleComplement}`);
      });
    });

    describe('without the complementary text', () => {
      const wrapperWithoutComplement = shallow(
        <ContentHeader title={title} description={description} />,
      );
      const foundTitle = wrapperWithoutComplement.find('h1');

      it('should have a h1 html tag', () => {
        expect(foundTitle.length).toEqual(1);
      });

      it('should have the correct text merge in the title', () => {
        expect(foundTitle.text()).toEqual(title);
      });
    });
  });

  describe('should render a title complement tag correctly', () => {
    const foundTitleComplement = wrapper.find('h1 span');

    it('should have a span html tag', () => {
      expect(foundTitleComplement.length).toEqual(1);
    });

    it('should have the right title complement text', () => {
      expect(foundTitleComplement.text()).toEqual(` - ${titleComplement}`);
    });
  });

  describe('should render header description tag correctly', () => {
    const foundHeaderDescription = wrapper.find('p');

    it('should have a p html tag', () => {
      expect(foundHeaderDescription.length).toEqual(1);
    });

    it('should have the right title text', () => {
      expect(foundHeaderDescription.text()).toEqual(description);
    });
  });
});
