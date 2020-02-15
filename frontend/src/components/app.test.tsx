import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

/** 
 * mock the API
 */
jest.mock('../utils/yes-no-api', () => ({
  getAnswer: jest.fn().mockImplementation(() => Promise.resolve({answer: 'yes', gif: 'yes.gif'}))
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});