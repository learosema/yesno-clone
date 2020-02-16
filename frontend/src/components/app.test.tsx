import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import { App } from './app';

import './styles.css';

/** 
 * mock the API
 */
jest.mock('../utils/yes-no-api', () => ({
  getAnswer: jest.fn().mockImplementation(() => Promise.resolve({answer: 'yes', gif: 'yes.gif'}))
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, div);
  });
  ReactDOM.unmountComponentAtNode(div);
});