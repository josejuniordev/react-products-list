import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';

const props = mapDispatchToProps(() => ({}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
