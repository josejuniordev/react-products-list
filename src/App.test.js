import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';

const initialProps = mapDispatchToProps(() => ({}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/jsx-props-no-spreading
  ReactDOM.render(<App {...initialProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
