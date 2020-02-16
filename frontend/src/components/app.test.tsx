import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import { App } from './app';

import './styles.css';
import { RequestState } from '../utils/ajax';

/** 
 * mock the API
 */
jest.mock('../utils/yes-no-api', () => ({
  getAnswer: jest.fn().mockImplementation(() => ({
    send: Promise.resolve({answer: 'yes', gif: 'yes.gif'}),
    state: RequestState.READY,
    abort: jest.fn()
  }))
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, div);
  });
  ReactDOM.unmountComponentAtNode(div);
});