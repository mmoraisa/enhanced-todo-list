import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import { WHITE } from './defaults/Colors';
import store from './store';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${WHITE};
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Home />
  </Provider>
);

export default App;
